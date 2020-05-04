import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Spacer } from '../components/base/layout'
import { TextInput } from '../components/base/text_input'
import { Button } from '../components/base/button'
import { Nav } from '../navigator'
import { Padding } from '../components/base/padding'
import { CheckBox } from '../components/base/checkbox'
import { Page } from '../components/base/page'
import { getNanoid } from '../helper'

const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 44px;
`

export default function CreateStudent() {
  let rank: string
  let lastName: string
  let firstName: string
  let mos: string
  let ranger: boolean
  let recycle: boolean

  return (
    <Page title="Create Student">
      <Padding horizontal={20}>
        <Spacer vertical={20} />
        <TextInput
          placeholder="Rank"
          onChange={(value) => {
            rank = value
          }}
        />
        <Spacer vertical={20} />
        <TextInput
          placeholder="Last Name"
          onChange={(value) => {
            lastName = value
          }}
        />
        <Spacer vertical={20} />
        <TextInput
          placeholder="First Name"
          onChange={(value) => {
            firstName = value
          }}
        />
        <Spacer vertical={20} />
        <TextInput
          placeholder="MOS"
          onChange={(value) => {
            mos = value
          }}
        />
        <Spacer vertical={20} />
        <Row>
          <CheckBox
            text="RANGER"
            onChange={(value) => {
              ranger = value
            }}
          />
          <CheckBox
            text="RECYCLE"
            onChange={(value) => {
              recycle = value
            }}
          />
        </Row>
      </Padding>
      <Spacer vertical={50} />
      <Button
        text="Create Student"
        onPress={() => {
          console.log({
            id: getNanoid(),
            rank: rank ?? '',
            lastName: lastName ?? '',
            firstName: firstName ?? '',
            mos: mos ?? '',
            ranger: ranger ?? false,
            recycle: recycle ?? false,
          })
          Nav.changePage('Students')
        }}
      />
      <Spacer vertical={20} />
      <Button
        text="Cancel"
        naked={true}
        onPress={() => {
          Nav.changePage('Students')
        }}
      />
    </Page>
  )
}
