import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { ImageCarousel } from '../../components/ImageCarousel'

import { 
  ActionButtonsArea,
  Container, 
  Content, 
  DescriptionArea, 
  GenresArea, 
  LinkButton, 
  OthersInfosArea, 
  PrimaryInfosArea, 
  ScrollImages 
} from './styles'


type IAPIGameScreenShotResponse = {
  count: number,
	next: string | null,
	previous: string | null,
	results: IGameScreenShotsProps[] | []
}

type IGameScreenShotsProps = {
  id: string | number
  image: string
}

type RouteProps = {
  gameId: string
}


export function Detail() {

  const { params } = useRoute()
  const { gameId } = params as RouteProps

  const [screenShots, setScreenShots] = useState<IGameScreenShotsProps[]>([])
  const [loading, setLoading] = useState(true)

  const INSETS = useSafeAreaInsets()
  const isFocused = useIsFocused()
  const { navigate } = useNavigation()


  async function fetchScheenShots(){
    const { data } = await api.get<IAPIGameScreenShotResponse>(`games/${gameId}/screenshots`)

    const screenShotsArrayResponse = data.results.map( screenShot => {
      return {
        id: screenShot.id,
        image: screenShot.image,
      }
    })

    setScreenShots(screenShotsArrayResponse)
  }


  function handleGoBack(){
    navigate('home')
  }


  function handleSaveFavorite(){
    // call AsyncStorage function
  }


  useEffect(() => {
    
    if(isFocused){
      fetchScheenShots()
      setLoading(false)
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

      <ScrollImages>
        <FlatList 
          data={screenShots}
          keyExtractor={item => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <ImageCarousel bg={item.image} />
          )}
          ListEmptyComponent={ () => (<ActivityIndicator size={30} color={'#FFF'}/>)}
        />

        <ActionButtonsArea>
            <Button type='back' onCall={handleGoBack}/>
            <Button type='book' onCall={ () => {} }/>
        </ActionButtonsArea>

        <LinkButton
          activeOpacity={0.6}
          onPress={ () => {} }
        >
          <Feather name="link" size={30} color="white" />
        </LinkButton>
        
      </ScrollImages>

      <Content>
        <PrimaryInfosArea>

        </PrimaryInfosArea>

        <GenresArea>

        </GenresArea>

        <DescriptionArea>

        </DescriptionArea>

        <OthersInfosArea>

        </OthersInfosArea>
      </Content>

    </Container>
  )
}