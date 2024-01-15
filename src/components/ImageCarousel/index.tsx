import { Dimensions, StyleSheet } from 'react-native'



import { BGImage, Container } from './styles'


type Props = {
  bg: string
}


export function ImageCarousel({ bg }: Props) {


  return (
    <Container>

      <BGImage
        source={{ uri: bg }}
        style={styles.images}
      />

    </Container>
  )
}

const styles = StyleSheet.create({
  images: {
    width: Dimensions.get('window').width,
  }
})