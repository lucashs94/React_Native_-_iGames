import styled from 'styled-components/native'


export const Content = styled.View`
  flex: 1;
  padding: 10px 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  margin-bottom: 10px;
`

export const TextArea = styled.Text`
  color: #bbb;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`