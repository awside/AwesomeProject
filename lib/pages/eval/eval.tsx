import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { Spacer } from '../../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import ScrollData from '../../components/unique/scrolldata'
import { THEME } from '../../framework/theme'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { IGradebook, grade, evalData } from '../../data/eval_data'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableWithoutFeedback } from 'react-native'
import { NavEmitter } from '../../framework/navigator/nav_emitter'

export const Eval = () => {
  const [content, setContent] = useState<Array<JSX.Element>>()

  useEffect(() => {
    HeaderEmitter.set(`Eval`)
    FooterEmitter.home(true)
    FooterEmitter.back('Evals')
    FooterEmitter.trash(() => {})
    FooterEmitter.edit(() => {})

    let eval_ = evalData.getCurrentEval()
    if (eval_) {
      evalData.updateEvalGrade(eval_)
      HeaderEmitter.grade(eval_.grade ?? 'n/a')

      let a: Array<JSX.Element> = []
      eval_.gradebooks.forEach((gb) => {
        a.push(<GradebookItem key={nanoid()} gradebook={gb} />)
        a.push(<Spacer key={nanoid()} vertical={5} />)
      })
      a.pop()
      setContent(a)
    }
  }, [])

  return <ScrollData content={[<Wrapper key={nanoid()}>{content}</Wrapper>]} />
}

const Wrapper = styled.View``

const GradebookItem = (props: { gradebook: IGradebook }) => {
  let color = evalData.evalGradeColor(props.gradebook.grade ?? 'n/a')

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        evalData.currentGradebook = props.gradebook
        NavEmitter.goto('Gradebook')
      }}
    >
      <TaskWrapper style={{ borderColor: color }}>
        <THEME.text.body>{props.gradebook.title}</THEME.text.body>
      </TaskWrapper>
    </TouchableWithoutFeedback>
  )
}

const TaskWrapper = styled.View`
  width: 100%;
  padding: 20px;
  background-color: ${THEME.colors.component};
  border-radius: 8px;
  border: 4px solid ${THEME.colors.dark};
`

const CheckBox = (props: { grade: grade }) => {
  let name: string
  let color: string
  switch (props.grade) {
    case 'go':
      name = 'checkbox-intermediate'
      color = THEME.colors.green
      break
    case 'nogo':
      name = 'checkbox-intermediate'
      color = THEME.colors.red
      break
    case 'n/a':
      name = 'checkbox-blank-outline'
      color = THEME.colors.icon
      break
  }

  return <MaterialCommunityIcons name={name} size={24} color={color} />
}
