import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import ScrollData from '../../components/unique/scrolldata'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { THEME } from '../../framework/theme'
import { pages, NavEmitter } from '../../framework/navigator/nav_emitter'
import { TouchableWithoutFeedback } from 'react-native'
import { nanoid } from 'nanoid/non-secure'
import { Spacer } from '../../components/base/spacer'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { evalData, IEval } from '../../data/eval_data'
import { studentData } from '../../data/student_data'

export const Evals = () => {
  HeaderEmitter.set('Evals')
  FooterEmitter.home(true)
  FooterEmitter.back('Home')
  FooterEmitter.addEval(() => {
    NavEmitter.goto('AddEval')
  })



  let content: Array<JSX.Element> = []
  content.push()
  for (let i = 0; i < evalData.numOfEvals; i++) {
    evalData.updateEvalGrade(evalData.getEvalByOrder(i))
    content.push(<Item key={nanoid()} eval={evalData.getEvalByOrder(i)} />)
    content.push(<Spacer vertical={5} key={nanoid()} />)
  }
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: { eval: IEval }) => {
  const [data, setData] = useState<{
    name: string
    mission: string
    position: string
    date: string
    color: string
  }>({ name: '', mission: '', position: '', date: '', color: '' })

  useEffect(() => {
    let student = studentData.getStudentByID(props.eval.studID)
    setData({
      name: `${student.rank} ${student.lastName}, ${student.firstName}`,
      mission: `${props.eval.mission}`,
      position: `${props.eval.position}`,
      date: `${props.eval.date}`,
      color: `${evalData.evalGradeColor(props.eval.grade ?? 'n/a')}`
    })
  }, [])

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        evalData.currentEvalID = props.eval.id
        NavEmitter.goto('Eval')
      }}
    >
      <Styles.Item style={{borderColor: data.color}}>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {data.name}
        </THEME.text.body>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {data.mission}
        </THEME.text.body>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {data.position}
        </THEME.text.body>
        <THEME.text.body style={{ color: THEME.colors.text }}>
          {data.date}
        </THEME.text.body>
      </Styles.Item>
    </TouchableWithoutFeedback>
  )
}

const Styles = {
  Item: styled.View`
    justify-content: center;
    padding: 20px;
    background-color: ${THEME.colors.component};
    border-radius: 8px;
    border: 4px solid;
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
