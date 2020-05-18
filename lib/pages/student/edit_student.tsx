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

export const EditStudent = () => {
  let student = studentData.getCurrentStudent()
  let studentEdit: IStudent = {
    id: student.id,
    rank: student.rank,
    lastName: student.lastName,
    firstName: student.firstName,
    mos: student.mos,
  }

  HeaderEmitter.set('Edit Profile')
  FooterEmitter.cancel(() => {
    NavEmitter.goto('Student')
  })
  FooterEmitter.confirm(() => {
    student.rank = studentEdit.rank
    student.lastName = studentEdit.lastName
    student.firstName = studentEdit.firstName
    student.mos = studentEdit.mos
    NavEmitter.goto('Student')
  })

  const data: Array<{
    value: string
    placeholder: string
    onChange: (v: string) => void
  }> = [
    {
      value: studentEdit.rank,
      placeholder: 'Rank',
      onChange: (v) => {
        studentEdit.rank = v
      },
    },
    {
      value: studentEdit.lastName,
      placeholder: 'Last Name',
      onChange: (v) => {
        studentEdit.lastName = v
      },
    },
    {
      value: studentEdit.firstName,
      placeholder: 'First Name',
      onChange: (v) => {
        studentEdit.firstName = v
      },
    },
    {
      value: studentEdit.mos,
      placeholder: 'MOS',
      onChange: (v) => {
        studentEdit.mos = v
      },
    },
  ]

  let content: Array<JSX.Element> = []
  content.push(<Spacer vertical={10} key={nanoid()} />)
  data.forEach((e) => {
    content.push(
      <Item value={e.value} placeholder={e.placeholder} onChange={e.onChange} key={nanoid()} />
    )
    content.push(<Spacer vertical={25} key={nanoid()} />)
  })
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: {
  value: string
  placeholder: string
  onChange: (v: string) => void
}) => {
  return (
    <Wrapper>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        key={nanoid()}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View``
