import { Container, GenreTitle } from './styles'


type Props = {
  title: string
}

export function GenreBox({ title }: Props) {
  return (
    <Container>
      
      <GenreTitle>
        {title}
      </GenreTitle>
    
    </Container>
  )
}