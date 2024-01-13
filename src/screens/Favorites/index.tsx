import { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import { useIsFocused, useNavigation, useRoute,  } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'

import { Card } from '../../components/Card'
import { Loading } from '../../components/Loading'
import { EmptyList } from '../../components/EmptyList'
import { IAPIGameResponse, IGameProps } from '../Home'

import { ButtonBack, CategoryTitle, Container, Content, Header } from './styles'


export function Favorites() {

  const [gameList, setGameList] = useState<IGameProps[]>([])
  // const [loading, setLoading] = useState(true)
  
  const INSETS = useSafeAreaInsets()
  const { navigate } = useNavigation()
  const isFocused = useIsFocused()
  
  
  async function fetchGames(){

    // setGameList(games)
    // setLoading(false)
  }
  

  useEffect(() => {
    
    if(isFocused){
      fetchGames()
    }
    
  }, [isFocused])

  
  // if(loading){
  //   return(
  //     <Loading/>
  //   )
  // }

  return (
    <Container
      insets={INSETS} 
    >
      <Header>
        <ButtonBack
          onPress={() => navigate('home')}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </ButtonBack>

        <CategoryTitle>
          My Favorites
        </CategoryTitle>
      </Header>

      <Content>
        <FlatList 
          data={gameList}
          keyExtractor={ item => String(item.name)}
          renderItem={({ item }) => (
            <Card item={item}/>
          )}
          ListEmptyComponent={() => <EmptyList/>}
        />
      </Content>
    </Container>
  )
}