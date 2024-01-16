import { useEffect, useRef, useState } from 'react'
import { FlatList, Linking } from 'react-native'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather, AntDesign } from '@expo/vector-icons'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { api } from '../../services/api'
import { DetailsRouteProps } from '../../@types/navigation';

import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { BottomSheet } from '../../components/BottomSheet'
import { Description } from '../../components/Description'
import { SectionView } from '../../components/SectionView'
import { ImageCarousel } from '../../components/ImageCarousel'

import { 
  ActionButtonsArea,
  Container, 
  Content, 
  GameNameText, 
  LinkButton, 
  PrimaryInfosArea, 
  RatingArea, 
  RatingText, 
  ScrollContent, 
  ScrollImages 
} from './styles'


type IGameDeatilResponseProps = {
  id: string
  name: string
  rating: string
  description_raw: string
  website: string
  genres: { name: string }[]
  platforms: { platform: { name: string }}[]
  stores: { store: { name: string }}[]
}

type IGameDeatilProps = {
  id: string
  name: string
  rating: string
  description_raw: string
  website: string
  genres: string[]
  platforms: string[]
  stores: string[]
}

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


export function Detail() {

  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const { params } = useRoute()
  const { gameId } = params as DetailsRouteProps

  const [gameData, setGameData] = useState<IGameDeatilProps>()
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


  async function fetchGame(){
    const { data } = await api.get<IGameDeatilResponseProps>(`games/${gameId}`)

    const gamesDetailResponse = {
      id: data.id,
      name: data.name,
      rating: data.rating,
      description_raw: data.description_raw,
      website: data.website,
      genres: data.genres.map( genre => genre.name ),
      platforms: data.platforms.map( platform => platform.platform.name ),
      stores: data.stores.map( store => store.store.name ),
    }

    setGameData(gamesDetailResponse)
    setLoading(false)
  }


  function handleGoBack(){
    navigate('home')
  }


  function handleOpenLink(){
    Linking.openURL(String(gameData?.website))
  }


  function handleOpenBottomSheet(){
    bottomSheetRef.current?.present()
  }


  function handleSaveFavorite(){
    // call AsyncStorage function
  }


  useEffect(() => {
    
    if(isFocused){
      fetchScheenShots()
      fetchGame()
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
        />

        <ActionButtonsArea>
            <Button type='back' onCall={handleGoBack}/>
            <Button type='book' onCall={ () => {} }/>
        </ActionButtonsArea>

        <LinkButton
          activeOpacity={0.6}
          onPress={ handleOpenLink }
        >
          <Feather name="link" size={30} color="white" />
        </LinkButton>
    
      </ScrollImages> 
      
      <Content>
        <ScrollContent>
          <PrimaryInfosArea>
              <RatingArea>

                <AntDesign name="star" size={18} color="#FABB1E" />
                <RatingText>
                  {gameData?.rating} / 10
                </RatingText>

              </RatingArea>

              <GameNameText>
                {gameData?.name}
              </GameNameText>

          </PrimaryInfosArea>
          
          <SectionView boxBG='light' dataArray={gameData?.genres} title='Genres'/>
          
          <Description text={gameData?.description_raw} onCall={ handleOpenBottomSheet }/>
          
          <SectionView boxBG='dark' dataArray={gameData?.platforms} title='Platforms'/>
          <SectionView boxBG='dark' dataArray={gameData?.stores} title='Stores'/>

        </ScrollContent>
      </Content>

        
      <BottomSheet ref={bottomSheetRef} description={gameData?.description_raw}/>

    </Container>  

  )
}