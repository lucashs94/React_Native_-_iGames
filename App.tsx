import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

import theme from './src/styles/theme'
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';



export default function App() {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

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
