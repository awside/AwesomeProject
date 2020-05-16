import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { emitter } from '../../my_modules/emitter'
import { THEME } from '../theme'

export function Header() {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    emitter.on('@Header-set', (text: string) => {
      setText(text)
    })
  }, [])

  return <Styles.Wrapper>{text}</Styles.Wrapper>
}

const Styles = {
  Wrapper: styled.View`
    width: 100%;
    height: 50px;
    border-top-color: ${THEME.colors.line};
    border-top-width: 2px;
    border-bottom-color: ${THEME.colors.line};
    border-bottom-width: 2px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${THEME.colors.background};
    /* opacity: 0.5; */
  `,
}
