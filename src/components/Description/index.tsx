import { ButtonText, CallButton, Container, TextArea, Title } from './styles'


type Props = {
  text: string | undefined
  onCall: () => void
}


export function Description({ text, onCall }: Props) {
  return (
    <Container>
      <Title>
        Description
      </Title>

      <TextArea
        numberOfLines={5}
        ellipsizeMode='tail'
      >
        {text}
      </TextArea>

      <CallButton
        activeOpacity={0.7}
        onPress={onCall}
      >
        <ButtonText>Read full description</ButtonText>
      </CallButton>
    </Container>
  )
}