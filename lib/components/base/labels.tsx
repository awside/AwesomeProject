import React from 'react'
import styled from 'styled-components/native'
import { Colors } from './color'

export function LabelTop(props: { text?: String }) {
  const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color:  ${Colors.text};
  `

  return <Title>{props.text}</Title>
}

export function LabelBar(props: { text?: String }) {
  const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
  `

  const Thickline = styled.View`
    flex: 1;
    height: 10px;
    background-color: #c0bfba;
  `

  const Title = styled.Text`
    font-size: 11px;
    font-weight: bold;
    color:  ${Colors.text};
    padding: 0px 5px;
  `

  return (
    <Container>
      <Thickline />
      <Title>{props.text}</Title>
      <Thickline />
    </Container>
  )
}