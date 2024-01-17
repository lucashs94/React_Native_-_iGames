import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'

import theme from './src/styles/theme'

import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })


  useEffect(() => {

    async function prepare(){
      try {
        await new Promise(resolve => setTimeout(resolve, 4000))
        
      } catch (error) { 
        console.log(error)

      }finally{
        await SplashScreen.hideAsync()
      }
    }

    prepare()
  }, [])


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <BottomSheetModalProvider>
          <StatusBar 
            barStyle={'light-content'}
            backgroundColor='transparent'
            translucent
          />

          {
            fontsLoaded ? <Routes/> : <Loading />
          }
            
        </BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
