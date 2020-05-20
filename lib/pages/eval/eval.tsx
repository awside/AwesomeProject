import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { Spacer } from '../../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import ScrollData from '../../components/unique/scrolldata'
import { THEME } from '../../framework/theme'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { NavEmitter } from '../../framework/navigator/nav_emitter'
import { studentData } from '../../data/student_data'
import { getWarno } from '../../data/gradebooks/warno'
import { IGradebook, grade } from '../../data/eval_data'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Eval = () => {
  FooterEmitter.home(true)
  FooterEmitter.back('Evals')

  let gb: IGradebook = getWarno()

  HeaderEmitter.set(`CPT Conner -- ${gb.title}`)

  let content: Array<JSX.Element> = []
  gb.sections.forEach((section) => {
    let taskContent: Array<JSX.Element> = []
    section.tasks.forEach((task) => {
      taskContent.push(
        <TaskWrapper key={nanoid()}>
          <THEME.text.body>{task.title}</THEME.text.body>
        </TaskWrapper>
      )
    })
    content.push(
      <Section key={nanoid()} title={section.title} content={taskContent} />
    )
    content.push(<Spacer key={nanoid()} vertical={20} />)
  })
  content.pop()
  return <ScrollData content={[<Wrapper key={nanoid()}>{content}</Wrapper>]} />
}

const Wrapper = styled.View``

const Section = (props: { title: string; content: Array<JSX.Element> }) => {
  return (
    <SectionWrapper>
      <SectionTitleRow>
        <SectionTitleLeft></SectionTitleLeft>
        <SectionTitleMiddle>
          <THEME.text.h2 style={{}}>{props.title}</THEME.text.h2>
        </SectionTitleMiddle>
        <SectionTitleRight>
          <CheckBox grade="n/a" />
        </SectionTitleRight>
      </SectionTitleRow>
      {props.content}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 8px solid ${THEME.colors.green};
`

const SectionTitleRow = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  background-color: ${THEME.colors.component};
  justify-content: center;
  align-items: center;
`

const SectionTitleLeft = styled.View`
  flex: 1;
`

const SectionTitleMiddle = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`

const SectionTitleRight = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TaskWrapper = styled.View`
  width: 100%;
  padding: 20px;
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
