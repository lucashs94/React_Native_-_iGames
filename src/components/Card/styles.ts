import styled from 'styled-components/native'


export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 170px;

  margin-bottom: 12px;
`

export const ImageBG = styled.ImageBackground.attrs(() => ({
  imageStyle: {
    borderRadius: 6,
  },
}))`
  flex: 1;
  border-radius: 8px;
`

export const PropsArea = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 12px;
  background: rgba(0,0,0, 0.5);
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const RatingArea = styled.View`
  flex-direction: row;
  gap: 6px;
`

export const RatingText= styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`