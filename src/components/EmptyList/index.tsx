import { Ionicons } from '@expo/vector-icons'
import { Container, Title } from './styles'



export function EmptyList() {
  return (
    <Container>
      
      <Title>
        Nenhum jogo foi encontrado...
      </Title>

      <Ionicons name="sad-outline" size={64} color="white" />

    </Container>
  )
}