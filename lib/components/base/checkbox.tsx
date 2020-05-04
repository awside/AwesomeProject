import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import { Spacer } from './layout'

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 44px;
  padding: 0px 16px;
`
const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #707070;
`

export function CheckBox(props: {
  text: string
  onChange?: (value: boolean) => void
}) {
  const [state, setState] = useState({
    toggle: false,
    icon: 'checkbox-blank-outline',
  })

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (state.toggle) {
          setState({
            toggle: false,
            icon: 'checkbox-blank-outline',
          })
          if (props.onChange) props.onChange(false)
        } else {
          setState({
            toggle: true,
            icon: 'checkbox-intermediate',
          })
          if (props.onChange) props.onChange(true)
        }
      }}
    >
      <Wrapper>
        <MaterialCommunityIcons name={state.icon} size={32} color="#707070" />
        <Spacer horizontal={5} />
        <Text>{props.text}</Text>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}
