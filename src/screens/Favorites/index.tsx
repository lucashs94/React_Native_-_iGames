import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'

import { api } from '../../services/api'
import { getFavorites } from '../../services/storage'

import { Card } from '../../components/Card'
import { Loading } from '../../components/Loading'
import { IGameProps } from '../Home'


import { ButtonBack, Container, Content, Header, HeaderTitle } from './styles'
import { EmptyList } from '../../components/EmptyList'


export function Favorites() {

  const [gameList, setGameList] = useState<IGameProps[]>([])
  const [loading, setLoading] = useState(true)
  
  const INSETS = useSafeAreaInsets()
  const { navigate } = useNavigation()
  const isFocused = useIsFocused()
  
  
  async function fetchGames(){

    const localGameIdList = await getFavorites()
    
    if(localGameIdList){

      localGameIdList.map( async gameId => {

        const { data } = await api.get(`games/${gameId}`)
        const results = data as IGameProps

        setGameList( prev => [...prev, results])
      })
    }

    setLoading(false)
  }
  

  useEffect(() => {
    
    if(isFocused){
      fetchGames()
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
      <Header>
        <ButtonBack
          onPress={() => navigate('home')}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </ButtonBack>

        <HeaderTitle>
          My Favorites
        </HeaderTitle>
      </Header>

      <Content>
        <FlatList 
          data={gameList}
          keyExtractor={ item => String(item.name)}
          renderItem={({ item }) => (
            <Card item={item}/>
          )}
          ListEmptyComponent={<EmptyList/>}
        />
      </Content>
    </Container>
  )
}