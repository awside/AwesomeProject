import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import ScrollData from '../../components/unique/scrolldata'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { THEME } from '../../framework/theme'
import { pages, NavEmitter } from '../../framework/navigator/nav_emitter'
import { TouchableWithoutFeedback } from 'react-native'
import { nanoid } from 'nanoid/non-secure'
import { Spacer } from '../../components/base/spacer'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { evalData } from '../../data/eval_data'
import { studentData } from '../../data/student_data'

export const Evals = () => {
  HeaderEmitter.set('TS Gradebooks')
  FooterEmitter.home(true)
  FooterEmitter.back('Home')
  FooterEmitter.addEval(() => {
    NavEmitter.goto('AddEval')
  })

  let content: Array<JSX.Element> = []
  content.push()
  for (let i = 0; i < evalData.numOfEvals; i++) {
    let e = evalData.getEvalByOrder(i)
    let s = studentData.getStudentByID(e.studID)
    content.push(
      <Item
        id={s.id}
        studentText={`${s.rank} ${s.lastName}, ${s.firstName}`}
        missionText={`${e.mission}`}
        positionText={`${e.position}`}
        dateText={`${e.date}`}
        key={nanoid()}
      />
    )
    content.push(<Spacer vertical={5} key={nanoid()} />)
  }
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: {
  id: string
  studentText: string
  missionText: string
  positionText: string
  dateText: string
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        evalData.currentEvalID = props.id
        NavEmitter.goto('Eval')
      }}
    >
      <Styles.Item>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {props.studentText}
        </THEME.text.body>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {props.missionText}
        </THEME.text.body>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {props.positionText}
        </THEME.text.body>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {props.dateText}
        </THEME.text.body>
      </Styles.Item>
    </TouchableWithoutFeedback>
  )
}

const Styles = {
  Item: styled.View`
    justify-content: center;
    padding: 20px;
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
