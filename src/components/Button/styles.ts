import styled from 'styled-components/native'


export const Container = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};

  border-radius: 50px;
`