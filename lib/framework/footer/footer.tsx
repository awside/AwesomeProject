import React, { useState } from 'react'
import styled from 'styled-components/native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback, StyleProp, TextStyle } from 'react-native'
import { emitter } from '../../my_modules/emitter'
import { pages, NavEmitter } from '../navigator/nav_emitter'
import { THEME } from '../theme'

export function Footer() {
  const [home, setHome] = useState<pages | undefined>()
  const [back, setBack] = useState<pages | undefined>()
  const [button1, setButton1] = useState<
    | {
        text?: string
        style?: StyleProp<TextStyle>
        action?: () => void
      }
    | undefined
  >()
  const [button2, setButton2] = useState<
    | {
        text?: string
        style?: StyleProp<TextStyle>
        action?: () => void
      }
    | undefined
  >()

  emitter.on('@Footer-setHome', (status: boolean) => {
    setHome(status ? 'Home' : undefined)
  })

  emitter.on('@Footer-setBack', (page: pages | undefined) => {
    setBack(page)
  })

  emitter.on(
    '@Footer-setButton1',
    (options?: {
      text: string
      style: StyleProp<TextStyle>
      action: () => void
    }) => {
      if (!options) {
        setButton1(undefined)
        return
      }
      setButton1(options)
    }
  )

  emitter.on(
    '@Footer-setButton2',
    (options?: {
      text: string
      style: StyleProp<TextStyle>
      action: () => void
    }) => {
      if (!options) {
        setButton2(undefined)
        return
      }
      setButton2(options)
    }
  )

  return (
    <Styles.Wrapper>
      <Styles.LeftSide></Styles.LeftSide>
      <HomeButton
        color={THEME.colors.text}
        onPress={() => {
          if (home) NavEmitter.goto('Home')
        }}
      />
      <BackButton
        color={THEME.colors.text}
        onPress={() => {
          if (back) NavEmitter.goto(back)
        }}
      />
    </Styles.Wrapper>
  )
}

const HomeButton = (props: { color: string; onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <MaterialCommunityIcons
          name="home-outline"
          size={24}
          color={props.color}
        />
        <THEME.text.CAPTION>HOME</THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const BackButton = (props: { color: string; onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <MaterialIcons name="arrow-back" size={24} color={props.color} />
        <THEME.text.CAPTION>BACK</THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const Styles = {
  Wrapper: styled.View`
    width: 100%;
    height: 50px;
    border-top-color: ${THEME.colors.line};
    border-top-width: 2px;
    flex-direction: row;
    justify-content: center;
  `,
  LeftSide: styled.View`
    flex: 1;
    flex-direction: row;
  `,
  RightSide: styled.View`
    flex: 1;
    flex-direction: row;
  `,
  Box: styled.View`
    width: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* background-color: white; */
  `,
}
