import AsyncStorage from '@react-native-async-storage/async-storage'
import { IGameProps } from '../../screens/Home'

const ASYNC_KEY = '@igames:games'


const getFavorites = async () => {

  const response = await AsyncStorage.getItem(ASYNC_KEY) 
  
  if(response){
    const respParsed = JSON.parse(response)
    return respParsed
  }

  return false
}


const saveFavorite = async (game: IGameProps) => {

  const response = await getFavorites()

  if(response){

    const data = [...response, game]
    await AsyncStorage.setItem(ASYNC_KEY, JSON.stringify(data))

    return true
  }

  return false
}