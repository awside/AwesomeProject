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

function Scroller() {
  const Wrapper = styled.ScrollView`
    flex: 1;
    width: 100%;
    padding: 20px;
    overflow: hidden;
  `
  const Item = styled.View`
    width: 100%;
    height: 200px;
    background-color: blue;
    margin-bottom: 20px;
  `

  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  )
}