import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons'


import { Container } from './styles'

type Props = {
  type?: 'back' | 'book' | 'bookFill'
  onCall: () => void
}

export function Button({ type='back', onCall }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      onPress={ onCall }
    >
      {
        type === 'back' && <AntDesign name="arrowleft" size={25} color="white" />
      }
      {
        type === 'book' && <Feather name="bookmark" size={25} color="white" />
      }
      {
        type === 'bookFill' && <FontAwesome name="bookmark" size={25} color="white" />
      }
      
      
    </Container>
  )
}