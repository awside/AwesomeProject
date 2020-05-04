import React, { useState } from 'react'
import styled from 'styled-components/native'
import { LabelBar, LabelTop } from '../components/labels'
import { Spacer } from '../components/layout'
import { TextInput } from '../components/text_input'
import { Button } from '../components/button'
import { changePage } from '../navigator'
import { Padding } from '../components/padding'
import { CheckBox } from '../components/checkbox'

const Wrapper = styled.KeyboardAvoidingView`
  width: 100%;
  max-width: 1000px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 44px;
`

export default function Home() {
  return (
    <Wrapper>
      <LabelTop text="Home" />
      <LabelBar text="SWAMP FOX" />
      <Padding horizontal={20}>
        <Spacer vertical={20} />
        <TextInput placeholder="Rank" onChangeText={(text: string) => {}} />
        <Spacer vertical={20} />
        <TextInput
          placeholder="Last Name"
          onChangeText={(text: string) => {}}
        />
        <Spacer vertical={20} />
        <TextInput
          placeholder="First Name"
          onChangeText={(text: string) => {}}
        />
        <Spacer vertical={20} />
        <Row>
          <CheckBox text="RANGER" />
          <CheckBox text="RECYCLE" />
        </Row>
        <Spacer vertical={50} />
        <Padding horizontal={40}>
          <Button
            text="Create Student"
            onPress={() => {
              console.log('button')
            }}
          />
        </Padding>
      </Padding>
    </Wrapper>
  )
}
