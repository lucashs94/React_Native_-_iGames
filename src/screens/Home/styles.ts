import styled from 'styled-components/native'
import { EdgeInsets } from 'react-native-safe-area-context'


type ContainerProps = {
  insets: EdgeInsets
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-top: ${({ insets }) => insets.top}px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`

export const ListArea = styled.View`
  width: 100%;

  padding: 0px 20px;
  margin: 30px 0px;
`

export const FlatListGenres = styled.FlatList`
`

export const ContentArea = styled.View`
  flex: 1;
  padding: 0px 20px;
`

export const ContentAreaTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  margin-bottom: 10px;
`

export const FlatListCards = styled.FlatList`
`