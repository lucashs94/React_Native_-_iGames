import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'


type ContainerProps = {
  insets: EdgeInsets
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-top: ${({ insets }) => insets.top}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`

export const ScrollImages = styled.View`
  width: 100%;
  height: 35%;

  align-items: center;
`

export const ActionButtonsArea = styled.View`
  position: absolute;
  width: 100%;
  padding: 15px 10px;
  flex-direction: row;
  justify-content: space-between;
`

export const LinkButton = styled.TouchableOpacity`
  position: absolute;
  bottom: -30px;
  right: 25px;

  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
`

export const Content = styled.View`
  flex: 1;
  padding: 30px 15px;
`

export const PrimaryInfosArea = styled.View`
  width: 100%;
  gap: 6px;
`

export const RatingArea = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const RatingText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  margin-top: 5px;
`

export const GameNameText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const GenresArea = styled.View`

`

export const DescriptionArea = styled.View`

`

export const OthersInfosArea = styled.View`

`
