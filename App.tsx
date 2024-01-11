import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

import theme from './src/styles/theme'
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';



export default function App() {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />

      {
        fontsLoaded ? <Routes/> : <Loading />
      }
        
    </ThemeProvider>
  );
}
