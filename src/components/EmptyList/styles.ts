import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`