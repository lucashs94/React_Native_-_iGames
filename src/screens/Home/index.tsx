import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HeaderMain } from '../../components/HeaderMain'
import { GenreBox } from '../../components/GenreBox'

import { Container, ContentArea, ContentAreaTitle, FlatListCards, FlatListGenres, ListArea } from './styles'
import { Card } from '../../components/Card'


export function Home() {

  const [genreList, setGenreList] = useState(['All games', 'Arcade', 'teste sss','All sssss', 'Arsssscade', 'tessste sss',])

  const INSETS = useSafeAreaInsets()


  return (
    <Container
      insets={INSETS}
    >

      <HeaderMain />

      <ListArea>
        <FlatListGenres
          horizontal
          showsHorizontalScrollIndicator={false}
          data={genreList}
          keyExtractor={ item => String(item)}
          renderItem={({ item }) => (
            <GenreBox title={item}/>
          )}
        />
      </ListArea>

      <ContentArea>

        <ContentAreaTitle>Trending games</ContentAreaTitle>

        <FlatListCards 
          data={genreList}
          keyExtractor={ item => String(item)}
          renderItem={({ item }) => (
            <Card />
          )}
        />

      </ContentArea>
    
    </Container>
  )
}