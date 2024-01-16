import React, { forwardRef, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useTheme } from 'styled-components/native'

import { Content, TextArea, Title } from './styles'


type Ref = BottomSheetModal

type Props = {
  description: string | undefined
}

export const BottomSheet = forwardRef<Ref, Props>(( props, ref ) => {

  const { COLORS } = useTheme()

  // variables
  const snapPoints = useMemo(() => ['80%'], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])


  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor: COLORS.GRAY_900, }}
      handleComponent={() => 
        <View style={{ alignSelf: 'center'}}>
          <View style={{ width: 40, height: 6, borderRadius: 3, backgroundColor: '#BBB', marginVertical: 10 }}/>
        </View>
      }    
    >
      <Content>

        <Title>Description</Title>

        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
        >
          <TextArea>
            {props.description}
          </TextArea>
        </BottomSheetScrollView>
        
      </Content>

    </BottomSheetModal>
  )
})