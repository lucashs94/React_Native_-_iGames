import { Feather, AntDesign } from '@expo/vector-icons'


import { Container } from './styles'

type Props = {
  type?: 'back' | 'book'
  onCall: () => void
}

export function Button({ type='back' }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      onPress={ () => {} }
    >
      {
        type === 'back' 
        ? <AntDesign name="arrowleft" size={30} color="white" />
        : <Feather name="bookmark" size={20} color="white" />
      }
      
    </Container>
  )
}