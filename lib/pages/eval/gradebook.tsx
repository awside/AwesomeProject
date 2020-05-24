import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { Spacer } from '../../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import ScrollData from '../../components/unique/scrolldata'
import { THEME } from '../../framework/theme'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { grade, ITask, ISection, evalData } from '../../data/eval_data'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableWithoutFeedback } from 'react-native'

export const Gradebook = () => {
  const [content, setContent] = useState<Array<JSX.Element>>()

  const updateGradeColor = () => {
    let gb = evalData.currentGradebook
    if (gb) {
      evalData.updateGradebookGrade(gb)
      HeaderEmitter.grade(gb.grade ?? 'n/a')
    }
  }

  useEffect(() => {
    HeaderEmitter.set(`CPT Conner -- ${evalData.currentGradebook?.title}`)
    FooterEmitter.home(true)
    FooterEmitter.back('Eval')

    let a: Array<JSX.Element> = []
    evalData.currentGradebook?.sections.forEach((section) => {
      a.push(<Section key={nanoid()} section={section} updateGradeColor={() => {updateGradeColor()}} />)
      a.push(<Spacer key={nanoid()} vertical={20} />)
    })
    a.pop()
    setContent(a)
  }, [])

  return <ScrollData content={[<Wrapper key={nanoid()}>{content}</Wrapper>]} />
}

const Wrapper = styled.View``

const Section = (props: { section: ISection, updateGradeColor: () => void }) => {
  const [color, setColor] = useState(THEME.colors.line)
  const [grade, setGrade] = useState<grade>('n/a')

  let updateColor = () => {
    switch (props.section.grade) {
      case 'n/a':
        setColor(THEME.colors.line)
        break
      case 'go':
        setColor(THEME.colors.green)
        break
      case 'nogo':
        setColor(THEME.colors.red)
        break
      default:
        setColor(THEME.colors.line)
        break
    }
  }

  let stepGrade = () => {
    switch (props.section.grade) {
      case 'n/a':
        props.section.grade = 'go'
        break
      case 'go':
        props.section.grade = 'nogo'
        break
      case 'nogo':
        props.section.grade = 'n/a'
        break
      default:
        props.section.grade = 'go'
        break
    }
    updateColor()
    setGrade(props.section.grade)
  }

  useEffect(() => {
    updateColor()
  }, [])

  let taskContent: Array<JSX.Element> = []
  props.section.tasks.forEach((task: ITask) => {
    taskContent.push(<Task key={nanoid()} task={task} />)
  })

  return (
    <SectionStyle.Wrapper style={{ borderColor: color }}>
      <TouchableWithoutFeedback onPress={() => {
        stepGrade()
        props.updateGradeColor()
      }}>
        <SectionStyle.TitleRow>
          <SectionStyle.TitleLeft></SectionStyle.TitleLeft>
          <SectionStyle.TitleMiddle>
            <THEME.text.h2 style={{}}>{props.section.title}</THEME.text.h2>
          </SectionStyle.TitleMiddle>
          <SectionStyle.TitleRight>
            <CheckBox grade={grade} />
          </SectionStyle.TitleRight>
        </SectionStyle.TitleRow>
      </TouchableWithoutFeedback>
      {taskContent}
    </SectionStyle.Wrapper>
  )
}

const SectionStyle = {
  Wrapper: styled.View`
    width: 100%;
    border-radius: 8px;
    border-width: 8px;
    border-style: solid;
  `,
  TitleRow: styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    background-color: ${THEME.colors.component};
    justify-content: center;
    align-items: center;
  `,
  TitleLeft: styled.View`
    flex: 1;
  `,

  TitleMiddle: styled.View`
    flex: 4;
    justify-content: center;
    align-items: center;
  `,

  TitleRight: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
}

const Task = (props: { task: ITask }) => {
  const [color, setColor] = useState('')

  let updateColor = () => {
    switch (props.task.grade) {
      case 'n/a':
        setColor('')
        break
      case 'go':
        setColor(THEME.colors.green)
        break
      case 'nogo':
        setColor(THEME.colors.red)
        break
      default:
        setColor('')
        break
    }
  }

  let stepGrade = () => {
    switch (props.task.grade) {
      case 'n/a':
        props.task.grade = 'go'
        break
      case 'go':
        props.task.grade = 'nogo'
        break
      case 'nogo':
        props.task.grade = 'n/a'
        break
      default:
        props.task.grade = 'go'
        break
    }
    updateColor()
  }

  useEffect(() => {
    updateColor()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={stepGrade}>
      <TaskWrapper key={nanoid()} style={{ backgroundColor: color }}>
        <THEME.text.body>{props.task.title}</THEME.text.body>
      </TaskWrapper>
    </TouchableWithoutFeedback>
  )
}

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
