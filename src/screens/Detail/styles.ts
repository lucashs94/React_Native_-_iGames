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

`

export const PrimaryInfosArea = styled.View`

`

export const GenresArea = styled.View`

`

export const DescriptionArea = styled.View`

`

export const OthersInfosArea = styled.View`

`
