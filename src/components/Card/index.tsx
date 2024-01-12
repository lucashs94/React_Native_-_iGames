import { AntDesign } from '@expo/vector-icons'

import { IGameProps } from '../../screens/Home'

import { Container, ImageBG, PropsArea, RatingArea, RatingText, Title } from './styles'

type Props = {
  item: IGameProps,
}

export function Card({ item }: Props) {
  return (
    <Container
      activeOpacity={0.7}
    >
      <ImageBG
        source={{ uri: item.background_image }}
      >

        <PropsArea>
          <Title>
            {item.name}
          </Title>

          <RatingArea>
            <AntDesign name="star" size={20} color="#FABB1E" />

            <RatingText>{item.rating}</RatingText>
          </RatingArea>
        </PropsArea>
      </ImageBG>


    </Container>
  )
}