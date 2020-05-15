import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Spacer } from '../base/spacer'
import { TouchableWithoutFeedback } from 'react-native'
import { Button } from '../base/button'
import { nanoid } from 'nanoid/non-secure'
import { pages, NavEmitter } from '../../framework/navigator/nav_emitter'
import { THEME } from '../../framework/theme'

export default function ScrollData(props: {
  title: string
  content: Array<{
    text: string
    page: pages
  }>
}) {
  let a: Array<JSX.Element> = []
  props.content.forEach((e) => {
    a.push(
      <TouchableWithoutFeedback
        key={nanoid()}
        onPress={() => {
          NavEmitter.goto(e.page)
        }}
      >
        <Item>
          <THEME.text.heading style={{ color: THEME.colors.textLight }}>
            {e.text}
          </THEME.text.heading>
        </Item>
      </TouchableWithoutFeedback>
    )
    a.push(<Spacer vertical={5} key={nanoid()} />)
  })
  a.pop()

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <Header>
        <THEME.text.title>{props.title}</THEME.text.title>
      </Header>
      {a}
      <Spacer vertical={20} />
      <Spacer vertical={500} />
    </ScrollView>
  )
}

const ScrollView = styled.ScrollView`
  padding: 0px 10px;
`
const Header = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`

const Item = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  /* border: .5px solid ${THEME.colors.line};  */
  background-color: ${THEME.colors.component};
  border-radius: 4px;
`
