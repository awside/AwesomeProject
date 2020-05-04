import React, { useState } from 'react'
import styled from 'styled-components/native'
import {
  Platform,
  TextInput as TextInputRN,
  TouchableWithoutFeedback,
} from 'react-native'

const Wrapper = styled.View`
  width: 100%;
  padding: 0px 16px;
  height: 44px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 6px;
`
const TextInput_ = styled.TextInput`
  width: 100%;
  font-size: 18px;
`

export function TextInput(props: {
  placeholder?: string
  autoCompleteType?: 'email' | 'password'
  keyboardType?: 'email-address'
  secureTextEntry?: boolean
  textContentType?: 'emailAddress' | 'password' | 'newPassword'
  onChange?: (value: string) => void
}) {
  const [text, setText] = useState('')
  let refTextInput: TextInputRN

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        refTextInput.focus()
      }}
    >
      <Wrapper>
        <TextInput_
          //@ts-ignore
          style={Platform.select({
            web: {
              outline: 'none',
            },
          })}
          ref={(ref: TextInputRN) => {
            refTextInput = ref
          }}
          placeholder={props.placeholder ?? ''}
          autoCompleteType={props.autoCompleteType ?? 'off'}
          keyboardType={props.keyboardType ?? 'default'}
          secureTextEntry={props.secureTextEntry ?? false}
          onChangeText={(text) => {
            setText(text)
            if (props.onChange) props.onChange(text)
          }}
          value={text}
        />
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}
