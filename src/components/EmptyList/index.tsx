import { Ionicons } from '@expo/vector-icons';
import { Container, Title } from './styles'

export function EmptyList() {
  return (
    <Container>
      
      <Title>
        Não encontramos um jogo com esse nome...
      </Title>

      <Ionicons name="sad-outline" size={64} color="white" />

    </Container>
  )
}