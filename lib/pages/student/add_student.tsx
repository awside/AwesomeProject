import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { Spacer } from '../../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import ScrollData from '../../components/unique/scrolldata'
import { TextInput } from '../../components/base/text_input'
import { THEME } from '../../framework/theme'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { NavEmitter } from '../../framework/navigator/nav_emitter'
import { IStudent, studentData } from '../../data/student_data'

export const AddStudent = () => {
  const student: IStudent = {
    id: nanoid(),
    rank: '',
    lastName: '',
    firstName: '',
    mos: '',
  }

  HeaderEmitter.set('ADD STUDENT')
  FooterEmitter.cancel(() => {
    NavEmitter.goto('Students')
  })
  FooterEmitter.confirm(() => {
    studentData.addStudent(student)
    NavEmitter.goto('Students')
  })

  const data: Array<{
    placeholder: string
    onChange: (v: string) => void
  }> = [
    {
      placeholder: 'Rank',
      onChange: (v) => { student.rank = v},
    },
    {
      placeholder: 'Last Name',
      onChange: (v) => {student.lastName = v},
    },
    {
      placeholder: 'First Name',
      onChange: (v) => {student.firstName = v},
    },
    {
      placeholder: 'MOS',
      onChange: (v) => {student.mos = v},
    },
  ]

  let content: Array<JSX.Element> = []
  content.push(<Spacer vertical={10} key={nanoid()} />)
  data.forEach((e) => {
    content.push(
      <Item placeholder={e.placeholder} onChange={e.onChange} key={nanoid()} />
    )
    content.push(<Spacer vertical={25} key={nanoid()} />)
  })
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: {
  placeholder: string
  onChange: (v: string) => void
}) => {
  return (
    <Wrapper>
      <TextInput
        placeholder={props.placeholder}
        onChange={props.onChange}
        key={nanoid()}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View``
