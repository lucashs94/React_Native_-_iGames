import styled from 'styled-components/native'
import { EdgeInsets } from 'react-native-safe-area-context'


type ContainerProps = {
  insets: EdgeInsets
}


export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-top: ${({ insets }) => insets.top}px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  margin: 20px 10px 10px;
`

export const ButtonBack = styled.TouchableOpacity`
`

export const CategoryTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-transform: uppercase;

  textAlignVertical: center;
  padding-top: 5px;
`

export const Content = styled.View`
  flex: 1;

`
