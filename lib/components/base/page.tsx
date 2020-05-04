import React, { useState } from 'react'
import styled from 'styled-components/native'
import { LabelTop, LabelBar } from './labels'

export function Page(props: { children?: any, title: string }) {
  const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: #e0dfd7;
    align-items: center;
  `

  const Content = styled.View`
    width: 100%;
    padding: 0px 18px;
  `

  return (
    <Wrapper>
      <LabelTop text={props.title} />
      <LabelBar text="SWAMP FOX" />
      <Content>{props?.children}</Content>
    </Wrapper>
  )
}
