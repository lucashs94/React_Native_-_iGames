import styled from 'styled-components/native'



export const Container = styled.View`
  width: 100%;

  margin: 10px 0px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const TextArea = styled.Text`
  color: #bbb;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const CallButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 6px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`