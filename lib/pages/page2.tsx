import React, { useState } from 'react'
import styled from 'styled-components/native'
import { LabelBar, LabelTop } from '../components/labels'
import { Spacer } from '../components/layout'

export default function Page2() {
  const Wrapper = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  `

  return (
    <Wrapper>
      <LabelTop text="PAGE 2" />
      <LabelBar text="SWAMP FOX" />
      <Spacer vertical={20} />
    </Wrapper>
  )
}