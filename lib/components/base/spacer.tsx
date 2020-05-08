import React from 'react'
import styled from 'styled-components/native'

export function Spacer(props: { horizontal?: number; vertical?: number }) {
  const MyView = styled.View`
    width: ${props.horizontal ?? 0}px;
    height: ${props.vertical ?? 0}px;
  `

  return <MyView />
}