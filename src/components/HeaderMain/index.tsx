import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { Feather, AntDesign } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'

import { 
  ButtonFavorites, 
  ButtonSearch, 
  Container, 
  Logo,
  LogoContainer, 
  SearchContainer, 
  SearchInput 
} from './styles'


export function HeaderMain() {

  const [searchInput, setSearchInput] = useState<string>()
  const { navigate } = useNavigation()
  const { COLORS } = useTheme()

  
  function handleGoToFavorites(){
    navigate('favorites')
  }


  function handleSearch(){
    if(searchInput === '' || searchInput === undefined || searchInput === null ) return

    navigate('search', { searchText: searchInput})
    setSearchInput('')
  }


  return (
    <Container>

      <LogoContainer>
        <Logo 
          source={ logoImg }
        />

        <ButtonFavorites 
          activeOpacity={0.7}
          onPress={ handleGoToFavorites }
        >
          <Feather name="bookmark" size={20} color="white" />
        </ButtonFavorites>
      </LogoContainer>

      <SearchContainer>

        <SearchInput 
          placeholder='Looking for a game?'
          placeholderTextColor={'#808080'}
          value={searchInput}
          onChangeText={setSearchInput}
        />

        <ButtonSearch
          activeOpacity={0.7}
          onPress={handleSearch}
        >
          <AntDesign name="search1" size={30} color={COLORS.RED_500} />
        </ButtonSearch>
      </SearchContainer>

    </Container>
  )
}