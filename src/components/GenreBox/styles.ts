import styled from 'styled-components/native'


export const Container = styled.TouchableOpacity`
  padding: 8px 12px;
  margin-right: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
`

export const GenreTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`