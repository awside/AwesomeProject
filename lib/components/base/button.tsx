import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableWithoutFeedback, View } from 'react-native'

const Wrapper = styled.View`
  height: 44px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  /* align-self: center; */
  border-radius: 6px;
`

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
`

export function Button(props: {
  text: string
  naked?: boolean
  onPress?: () => void
}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (props.onPress) props.onPress()
      }}
    >
      <Wrapper
        style={{
          backgroundColor: props.naked ? 'transparent' : '#707070',
        }}
      >
        <Text
          style={{
            color: props.naked ? '#707070' : 'white',
          }}
        >
          {props.text}
        </Text>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}
