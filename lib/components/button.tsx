import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableWithoutFeedback } from 'react-native'

const Wrapper = styled.View`
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  background-color: #707070;
  border-radius: 6px;
`

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: transparent;
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
