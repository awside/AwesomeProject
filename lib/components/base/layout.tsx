import React, { useState } from 'react'
import styled from 'styled-components/native'

export function Spacer(props: { horizontal?: number; vertical?: number }) {
  const MyView = styled.View`
    width: ${props.horizontal ?? 0}px;
    height: ${props.vertical ?? 0}px;
  `

  return <MyView />
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