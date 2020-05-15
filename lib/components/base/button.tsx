import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableWithoutFeedback } from 'react-native'
import { THEME } from '../../framework/theme'

const Wrapper = styled.View`
  height: 44px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 6px;
`

const Text = styled.Text`
  color: ${THEME.colors.button};
  font-size: 20px;
  font-weight: bold;
`

export function Button(props: { text: string; onPress?: () => void }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Wrapper>
        <Text>{props.text}</Text>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}
