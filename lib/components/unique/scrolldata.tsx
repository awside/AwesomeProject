import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextStyles } from '../base/text'
import { Spacer } from '../base/spacer'
import { Colors } from '../base/color'
import { TouchableWithoutFeedback } from 'react-native'
import { Button } from '../base/button'
import { nanoid } from 'nanoid/non-secure'
import { pages, NavEmitter } from '../../framework/navigator/nav_emitter'

export default function ScrollData(props: {
  title: string
  content: Array<{
    text: string
    page: pages
  }>
}) {
  let a: Array<JSX.Element> = []
  props.content.forEach((e) => {
    console.log(nanoid())
    a.push(
      <TouchableWithoutFeedback
        key={nanoid()}
        onPress={() => {
          NavEmitter.goto(e.page)
        }}
      >
        <Item>
          <TextStyles.H3>{e.text}</TextStyles.H3>
        </Item>
      </TouchableWithoutFeedback>
    )
    a.push(<Spacer vertical={5} key={nanoid()} />)
  })
  a.pop()

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <Header>
        <TextStyles.H1>{props.title}</TextStyles.H1>
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
  /* border: 1px solid ${Colors.line}; */
  background-color: ${Colors.component};
  border-radius: 4px;
`
