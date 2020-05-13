import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextStyles } from '../base/text'
import { Spacer } from '../base/spacer'
import { Colors } from '../base/color'
import { TouchableWithoutFeedback } from 'react-native'
import { getNanoid } from '../../helper'
import { pages, NavEmitter } from '../../emitter'

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
  border: 1px solid ${Colors.line};
`

export interface IScrollDataItem {
  text: string
  page: pages
}

export default function ScrollData(props: {
  title: string
  content: Array<IScrollDataItem>
}) {
  let a: Array<JSX.Element> = []
  props.content.forEach((e) => {
    a.push(
      <TouchableWithoutFeedback
        key={getNanoid()}
        onPress={() => {
          NavEmitter.goto(e.page)
        }}
      >
        <Item>
          <TextStyles.H3>{e.text}</TextStyles.H3>
        </Item>
      </TouchableWithoutFeedback>
    )
  })

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <Header>
        <TextStyles.H2>{props.title}</TextStyles.H2>
      </Header>
      {a}
      <Spacer vertical={500} />
    </ScrollView>
  )
}