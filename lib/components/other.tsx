import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextInput } from 'react-native'

function UselessTextInput() {
  const [value, onChangeText] = useState('Useless Placeholder')
  return (
    <TextInput
      onChangeText={(text) => {
        console.log(text)
        onChangeText(text)
      }}
      value={value}
    />
  )
}

