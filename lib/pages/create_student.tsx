import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Padding } from '../components/base/padding'
import { Spacer } from '../components/base/spacer'
import { TextInput, CheckBox } from 'react-native'

const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 44px;
`

export function CreateStudent() {
  let rank: string
  let lastName: string
  let firstName: string
  let mos: string
  let ranger: boolean
  let recycle: boolean

  return (
      <Padding horizontal={20}>
        <Spacer vertical={20} />
        <TextInput
          placeholder="Rank"
          onChange={(value) => {
            // rank = value
          }}
        />
        <Spacer vertical={20} />
        <TextInput
          placeholder="Last Name"
          onChange={(value) => {
            // lastName = value
          }}
        />
        <Spacer vertical={20} />
        <TextInput
          placeholder="First Name"
          onChange={(value) => {
            // firstName = value
          }}
        />
        <Spacer vertical={20} />
        <TextInput
          placeholder="MOS"
          onChange={(value) => {
            // mos = value
          }}
        />
        <Spacer vertical={20} />
        <Row>
          <CheckBox
            // text="RANGER"
            onChange={(value) => {
              ranger = value
            }}
          />
          <CheckBox
            // text="RECYCLE"
            onChange={(value) => {
              recycle = value
            }}
          />
        </Row>
      </Padding>
      // <Spacer vertical={50} />
      // <Button
      //   text="Create Student"
      //   onPress={() => {
      //     console.log({
      //       id: getNanoid(),
      //       rank: rank ?? '',
      //       lastName: lastName ?? '',
      //       firstName: firstName ?? '',
      //       mos: mos ?? '',
      //       ranger: ranger ?? false,
      //       recycle: recycle ?? false,
      //     })
      //     emitter.changePage('Students')
      //   }}
      // />
      // <Spacer vertical={20} />
      // <Button
      //   text="Cancel"
      //   naked={true}
      //   onPress={() => {
      //     emitter.changePage('Students')
      //   }}
      // />
  )
}
