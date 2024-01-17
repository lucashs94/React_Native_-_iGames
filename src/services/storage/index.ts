import AsyncStorage from '@react-native-async-storage/async-storage'

const ASYNC_KEY = '@igames:games'


export const getFavorites = async () => {

  const response = await AsyncStorage.getItem(ASYNC_KEY) 
  
  if(response){
    const respParsed = JSON.parse(response)
    return respParsed as string[] | []
  }
}


export const getOneFavorite = async (gameId: string) => {

  const response = await getFavorites()
  
  if(response){

    const filtered = response.filter( item => item === gameId)
    
    if(filtered.length > 0){
      return filtered
    }
  }

  return false
}


export const saveFavorite = async (gameId: string) => {

  const response = await getFavorites()

  if(response){
    const data = [...response, gameId]
    await AsyncStorage.setItem(ASYNC_KEY, JSON.stringify(data))

    return
  }

  const data = [gameId]
  await AsyncStorage.setItem(ASYNC_KEY, JSON.stringify(data))
}


export const removeFavorite = async (gameId: string) => {

  const response = await getFavorites()

  if(response){

    const data = response.filter( item => item !== gameId)
    await AsyncStorage.setItem(ASYNC_KEY, JSON.stringify(data))

    return true
  }

  return false
}