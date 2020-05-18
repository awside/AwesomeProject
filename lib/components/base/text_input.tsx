import React, { useState } from 'react'
import styled from 'styled-components/native'
import {
  Platform,
  TextInput as TextInputRN,
  TouchableWithoutFeedback,
} from 'react-native'
import { THEME } from '../../framework/theme'

export function TextInput(props: {
  value?: string
  placeholder?: string
  autoCompleteType?: 'email' | 'password'
  keyboardType?: 'email-address'
  secureTextEntry?: boolean
  textContentType?: 'emailAddress' | 'password' | 'newPassword'
  onChange?: (value: string) => void
}) {
  const [text, setText] = useState(props.value ?? '')
  const [focus, setFocus] = useState(false)
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
          style={{
            borderBottomColor: focus
              ? THEME.colors.highlight
              : THEME.colors.component,
          }}
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
          placeholderTextColor={THEME.colors.background}
          onFocus={() => {
            setFocus(true)
          }}
          onBlur={() => {
            setFocus(false)
          }}
        />
        <THEME.text.h2
          style={{
            color: focus ? THEME.colors.highlight : THEME.colors.component,
          }}
        >
          {props.placeholder}
        </THEME.text.h2>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

const Wrapper = styled.View`
  width: 100%;
  padding: 0px 16px;
  height: 44px;
  justify-content: center;
  /* align-items: center; */
  /* background-color: ${THEME.colors.text}; */
  border-radius: 6px;
`
const TextInput_ = styled.TextInput`
  width: 100%;
  font-size: 18px;
  border-bottom-width: 2px;
  color: white;
`
