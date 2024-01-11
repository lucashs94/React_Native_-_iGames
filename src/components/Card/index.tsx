import { AntDesign } from '@expo/vector-icons'


import { Container, RatingArea, RatingText, Title } from './styles'



export function Card() {
  return (
    <Container
      activeOpacity={0.7}
    >

      <Title>
        CyberPunk 2077
      </Title>

      <RatingArea>
        <AntDesign name="star" size={20} color="#FABB1E" />

        <RatingText>4.5/10</RatingText>
      </RatingArea>

    </Container>
  )
}