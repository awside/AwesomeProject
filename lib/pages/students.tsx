import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Spacer } from '../components/base/layout'
import { Nav } from '../navigator'
import { Button } from '../components/base/button'
import { Page } from '../components/base/page'

let studentData = [
  {
    id: '234jsdlfg;',
    rank: 'SGT',
    lastName: 'Grimmard',
    firstName: 'Jake',
    mos: '18B',
    ranger: true,
    recycle: false,
  },
  {
    id: '234jsdsdlfg;',
    rank: 'CPT',
    lastName: 'Connor',
    firstName: 'Joe',
    mos: '18A',
    ranger: false,
    recycle: true,
  },
]

export default function Students() {
  return (
    <Page title="Students">
      <Spacer vertical={20} />
      <Button
        text="Students"
        onPress={() => {
          Nav.changePage('Create_Student')
        }}
      />
    </Page>
  )
}
