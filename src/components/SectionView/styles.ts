import styled from 'styled-components/native'


type ContainerProps = {
  boxBG: string
}

export const Container = styled.View`
  width: 100%;

  margin: 15px 0px;
`

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  margin-bottom: 6px;
`

export const Content = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`

export const BoxSection = styled.View<ContainerProps>`
  background-color: ${({ theme, boxBG }) => boxBG === 'light' 
  ? theme.COLORS.GRAY_500 
  : theme.COLORS.PRIMARY_800};

  align-items: center;
  justify-content: center;

  padding: 4px 12px;
  border-radius: 8px;
`

export const BoxText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`