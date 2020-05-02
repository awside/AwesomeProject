import React, { useState } from 'react'
import styled from 'styled-components/native'
import { LabelBar, LabelTop } from '../components/labels'
import { Spacer } from '../components/layout'
import { TouchableWithoutFeedback } from 'react-native'
import { changePage } from './Navigator'

export default function Page1() {
  const Wrapper = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  `

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        changePage('PAGE 2')
      }}
    >
      <Wrapper>
        <LabelTop text="PAGE 1" />
        <LabelBar text="SWAMP FOX" />
        <Spacer vertical={20} />
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}
