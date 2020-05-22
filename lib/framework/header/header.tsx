import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { emitter } from '../../my_modules/emitter'
import { THEME } from '../theme'

export function Header() {
  const [text, setText] = useState<string>('SWAMP FOX')
  const [color, setColor] = useState(THEME.colors.dark)

  useEffect(() => {
    emitter.on('@Header-set', (text: string) => {
      setText(text)
    })

    emitter.on('@Header-color', (color: string) => {
      setColor(color)
    })
  }, [])

  return (
    <Styles.Wrapper style={{ borderBottomColor: color }}>
      <THEME.text.h2>{text}</THEME.text.h2>
    </Styles.Wrapper>
  )
}

const Styles = {
  Wrapper: styled.View`
    width: 100%;
    height: 30px;
    border-bottom-width: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${THEME.colors.background};
  `,
}
