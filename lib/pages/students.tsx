import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import ScrollData from '../components/unique/scrolldata'
import { HeaderEmitter } from '../framework/header/header_emitter'
import { THEME } from '../framework/theme'
import { pages, NavEmitter } from '../framework/navigator/nav_emitter'
import { TouchableWithoutFeedback } from 'react-native'
import { nanoid } from 'nanoid/non-secure'
import { Spacer } from '../components/base/spacer'
import { FooterEmitter } from '../framework/footer/footer_emitter'
import { StudentData } from '../data/student_data'
import { Entypo } from '@expo/vector-icons'

export const Students = () => {
  HeaderEmitter.set('STUDENT ROSTER')
  FooterEmitter.home(true)
  FooterEmitter.back('Home')
  FooterEmitter.add(() => {})

  useEffect(() => {}, [])

  let content: Array<JSX.Element> = []
  content.push()
  for (let i = 0; i < StudentData.data.students.length; i++) {
    let rank = StudentData.data.students[i].rank
    let lastName = StudentData.data.students[i].lastName
    content.push(
      <Item text={`${rank} ${lastName}`} page={'Home'} key={nanoid()} />
    )
    content.push(<Spacer vertical={5} key={nanoid()} />)
  }
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: { text: string; page: pages }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        NavEmitter.goto(props.page)
      }}
    >
      <Styles.Item>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {props.text}
        </THEME.text.body>
      </Styles.Item>
    </TouchableWithoutFeedback>
  )
}

const Styles = {
  Item: styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    border: 2px solid ${THEME.colors.dark};
    background-color: ${THEME.colors.component};
    border-radius: 8px;
  `,
  SeperatorWrapper: styled.View`
    width: 100%;
    height: 10px;
    justify-content: center;
    align-items: center;
  `,
  SeperatorLine: styled.View`
    width: 80%;
    height: 0.5px;
    background-color: ${THEME.colors.icon};
  `,
}
