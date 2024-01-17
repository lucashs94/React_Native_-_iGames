import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'

import { api } from '../../services/api'

import { Card } from '../../components/Card'
import { Loading } from '../../components/Loading'
import { GenreBox } from '../../components/GenreBox'
import { HeaderMain } from '../../components/HeaderMain'

import { 
  Container, 
  ContentArea, 
  ContentAreaTitle, 
  ListArea 
} from './styles'


export type IAPIGenreResponse = {
  count: number,
	next: string | null,
	previous: string | null,
	results: IGenreProps[] | []
}

export type IGenreProps = {
  id: string
  name: string
  games_count: number
}

export type IAPIGameResponse = {
  count: number,
	next: string | null,
	previous: string | null,
	results: IGameProps[] | []
}

export type IGameProps = {
  id: string
  name: string
  rating: string
  background_image: string
}


export function Home() {
  
  const isFocused = useIsFocused()
  const INSETS = useSafeAreaInsets()

  const [genreList, setGenreList] = useState<IGenreProps[]>([])
  const [gameList, setGameList] = useState<IGameProps[]>([])
  const [page, setPage] = useState(1)
  const [hasMoreData, setHasMoreData] = useState(true)
  const [loading, setLoading] = useState(true)


  async function fetchAllGames(){

    if(!hasMoreData) return

    const { data } = await api.get<IAPIGameResponse>('games', {
      params:{
        page: page,
        page_size: 10,
      }
    })

    if(data.results){
      const games = data.results.map( game => {
        return {
          id: game.id,
          name: game.name,
          rating: game.rating,
          background_image: game.background_image,
        }
      })

      setGameList(prev => [...prev, ...games])

      if(data.next){
        setPage( prev => prev+1)
      }else{
        setHasMoreData(false)
      }
    }

    setLoading(false)
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

    if(isFocused){
      fetchAllGenres()
      fetchAllGames()
    }
    
  }, [isFocused])


  if(loading){
    return(
      <Loading/>
    )
  }

  
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
            <GenreBox genre={item}/>
          )}
        />
      </ListArea>

      <ContentArea>

        <ContentAreaTitle>Trending games</ContentAreaTitle>

        <FlatList 
          data={gameList}
          keyExtractor={ item => String(item.name)}
          onEndReached={fetchAllGames}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <Card item={item}/>
          )}
          ListFooterComponent={
            <ActivityIndicator size={'large'} color={'red'} style={{ marginVertical: 10}}/>
          }
        />

      </ContentArea>
    
    </Container>
  )
}