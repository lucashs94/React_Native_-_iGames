import styled from 'styled-components/native'


export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 170px;
  justify-content: flex-end;

  background-color: red;

  margin-bottom: 12px;
  padding: 10px;
  
  border-radius: 8px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const RatingArea = styled.View`
  flex-direction: row;

  gap: 6px;
`

export const RatingText= styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`