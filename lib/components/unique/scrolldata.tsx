import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Spacer } from '../base/spacer'
import { THEME } from '../../framework/theme'

export default function ScrollData(props: { content: Array<JSX.Element> }) {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <Spacer vertical={20} />
      {props.content}
      <Spacer vertical={20} />
      <Spacer vertical={500} />
    </ScrollView>
  )
}

const ScrollView = styled.ScrollView`
  padding: 0px 10px;
`
