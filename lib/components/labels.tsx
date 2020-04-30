import React from 'react'
import styled from 'styled-components/native'

export function LabelTop(props: { text?: String }) {
  const Title = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #707070;
  `

  return <Title>{props.text}</Title>
}

export function LabelBar(props: { text?: String }) {
  const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0px 20px;
  `

  const Thickline = styled.View`
    flex: 1;
    height: 10px;
    background-color: #c0bfba;
  `

  const Title = styled.Text`
    font-size: 11px;
    font-weight: bold;
    color: #707070;
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