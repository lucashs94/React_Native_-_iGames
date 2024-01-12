import { useNavigation } from '@react-navigation/native'
import { IGenreProps } from '../../screens/Home'

import { Container, GenreTitle } from './styles'


type Props = {
  genre: IGenreProps
}

export function GenreBox({ genre }: Props) {

  const { navigate } = useNavigation()

  function handleGoToCategories(){
    navigate('categories', { genre })
  }


  return (
    <Container
      activeOpacity={0.7}
      onPress={ handleGoToCategories }
    >
      
      <GenreTitle>
        {genre.name}
      </GenreTitle>
    
    </Container>
  )
}