import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { api } from '../../services/api'

import { Card } from '../../components/Card'
import { GenreBox } from '../../components/GenreBox'
import { HeaderMain } from '../../components/HeaderMain'

import { Container, ContentArea, ContentAreaTitle, ListArea } from './styles'

type IAPIGenreResponse = {
  count: number,
	next: string | null,
	previous: string | null,
	results: IGenreProps[] | []
}

type IGenreProps = {
  id: string
  name: string
  games_count: number
}

type IAPIGameResponse = {
  count: number,
	next: string | null,
	previous: string | null,
	results: IGameProps[] | []
}

export type IGameProps = {
  name: string
  rating: string
  background_image: string
}

export function Home() {

  const [genreList, setGenreList] = useState<IGenreProps[]>([])
  const [gameList, setGameList] = useState<IGameProps[]>([])

  const INSETS = useSafeAreaInsets()

  
  async function fetchAllGames(){
    const { data } = await api.get<IAPIGameResponse>('games', {
      params:{
        page_size: 10,
      }
    })

    const games = data.results.map( game => {
      return {
        name: game.name,
        rating: game.rating,
        background_image: game.background_image,
      }
    })

    setGameList(games)
  }
  
  async function fetchAllGenres(){
    const { data } = await api.get<IAPIGenreResponse>('genres')

    const genres = data.results.map( genre => {
      return {
        id: genre.id,
        name: genre.name,
        games_count: genre.games_count,
      }
    })

    setGenreList(genres)
  }


  useEffect(() => {

    fetchAllGenres()
    fetchAllGames()
    
  }, [])


  return (
    <Container
      insets={INSETS}
    >

      <HeaderMain />

      <ListArea>
        <FlatList
          data={genreList}
          keyExtractor={ item => String(item.id) }
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <GenreBox title={item.name}/>
          )}
        />
      </ListArea>

      <ContentArea>

        <ContentAreaTitle>Trending games</ContentAreaTitle>

        <FlatList 
          data={gameList}
          keyExtractor={ item => String(item.name)}
          renderItem={({ item }) => (
            <Card item={item}/>
          )}
        />

      </ContentArea>
    
    </Container>
  )
}