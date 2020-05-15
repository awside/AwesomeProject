import React, { useState } from 'react'
import styled from 'styled-components/native'
import { nanoid } from 'nanoid/non-secure'
import { emitter } from '../../my_modules/emitter'

const TLB = {
  Wrapper: styled.View`
    width: 100%;
  `,
  Rotate90: styled.View`
    flex-direction: column-reverse;
  `,
}

export function TextLineVertical(props: {
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

  return (
    <TLB.Wrapper>
      <TLB.Rotate90
        style={{
          height: width,
          width: length,
          transform: [
            { rotate: '90deg' },
            { translateX: offset },
            { translateY: offset },
          ],
        }}
      >
        {a}
      </TLB.Rotate90>
    </TLB.Wrapper>
  )
}

const TL = {
  Wrapper: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Text: styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #c0bfba;
    padding-right: 5px;
  `,

  Line: styled.View`
    flex: 1;
    background-color: #c0bfba;
    height: 1px;
  `,
}

function TextAndLine(props: { name: string }) {
  return (
    <TL.Wrapper>
      <TL.Text>{props.name}</TL.Text>
      <TL.Line />
    </TL.Wrapper>
  )
}
