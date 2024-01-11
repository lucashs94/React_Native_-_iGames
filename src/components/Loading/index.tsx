import { useTheme } from 'styled-components/native'
import { Container, Spinner } from './styles'


export function Loading() {

  const { COLORS } = useTheme()

  return (
    <Container>
      <Spinner 
        color={COLORS.RED_500}
        size={30}
      />
    </Container>
  )
}