import styled from 'styled-components/native'


export const Container = styled.View`
  width: 100%;

  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;

  gap: 20px;
`

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
`

export const Logo = styled.Image`
`

export const ButtonFavorites = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  background-color: ${({ theme }) =>  theme.COLORS.GRAY_900};
`

export const SearchContainer = styled.View`
  align-items: center;
  gap: 6px;
  flex-direction: row;
`

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 8px 18px;
  color: ${({ theme }) =>  theme.COLORS.WHITE};
  border-radius: 26px;

  background-color: ${({ theme }) =>  theme.COLORS.GRAY_900};
`

export const ButtonSearch = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
`
