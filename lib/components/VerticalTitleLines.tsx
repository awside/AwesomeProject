import React, { useState } from 'react'
import styled from 'styled-components/native'
import { nanoid } from 'nanoid/non-secure'
import { emitter } from '../Emitter'

export function TextLineBackground(props: {
  names: Array<string>
  emitName: string
}) {
  const [length, setLength] = useState(100)

  emitter.on(props.emitName, (length: number) => {
    setLength(length)
  })

  let a = []
  for (let i = 0; i < props.names.length; i++) {
    a.push(<TextAndLine name={props.names[i]} key={nanoid()} />)
  }
  let width = 200
  let offset = length / 2 - width / 2

  const Wrapper = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  `

  const Rotate90 = styled.View`
    flex-direction: column-reverse;
    height: ${width}px;
    width: ${length}px;
    transform: rotate(90deg) translateX(${-offset}px) translateY(${offset}px);
  `

  return (
    <Wrapper>
      <Rotate90>{a}</Rotate90>
    </Wrapper>
  )
}

export function TextAndLine(props: { name: string }) {
  const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #c0bfba;
    padding-right: 5px;
  `

  const Line = styled.View`
    flex: 1;
    background-color: #c0bfba;
    height: 1px;
  `

  return (
    <Wrapper>
      <Text>{props.name}</Text>
      <Line />
    </Wrapper>
  )
}
