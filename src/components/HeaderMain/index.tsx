import { useTheme } from 'styled-components/native'
import { Feather, AntDesign } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'

import { ButtonFavorites, ButtonSearch, Container, Logo, LogoContainer, SearchContainer, SearchInput } from './styles'



export function HeaderMain() {

  const { COLORS } = useTheme()


  return (
    <Container>

      <LogoContainer>
        <Logo 
          source={ logoImg }
        />

        <ButtonFavorites 
          activeOpacity={0.7}
        >
          <Feather name="bookmark" size={20} color="white" />
        </ButtonFavorites>
      </LogoContainer>

      <SearchContainer>

        <SearchInput 
          placeholder='Looking for a game?'
          placeholderTextColor={'#808080'}
        />

        <ButtonSearch
          activeOpacity={0.7}
        >
          <AntDesign name="search1" size={30} color={COLORS.RED_500} />
        </ButtonSearch>
      </SearchContainer>

    </Container>
  )
}