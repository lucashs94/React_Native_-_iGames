import { Feather, AntDesign } from '@expo/vector-icons'


import { Container } from './styles'

type Props = {
  type?: 'back' | 'book'
  onCall: () => void
}

export function Button({ type='back', onCall }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      onPress={ onCall }
    >
      {
        type === 'back' 
        ? <AntDesign name="arrowleft" size={25} color="white" />
        : <Feather name="bookmark" size={25} color="white" />
      }
      
    </Container>
  )
}