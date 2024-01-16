import { BoxSection, BoxText, Container, Content, SectionTitle } from './styles'

type Props = {
  title: string
  boxBG: 'dark'| 'light'
  dataArray: string[] | undefined
}


export function SectionView({ title, boxBG, dataArray }: Props) {
  return (
    <Container>

      <SectionTitle>
        {title}
      </SectionTitle>

      <Content>
        {
          dataArray?.map( data => (
            <BoxSection
              boxBG={boxBG}
              key={String(data)}
            >
              <BoxText>{data}</BoxText>
            </BoxSection>
          ))
        }
      </Content>


    </Container>
  )
}