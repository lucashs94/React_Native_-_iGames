import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`

export const Spinner = styled.ActivityIndicator`
  
`
