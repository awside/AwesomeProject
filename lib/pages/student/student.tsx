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

export const Student = () => {
  let student = studentData.getCurrentStudent()

  HeaderEmitter.set(`${student.rank} ${student.lastName}, ${student.firstName}`)
  FooterEmitter.trash(() => {
    studentData.removeStudent(student.id)
    NavEmitter.goto('Students')
  })
  FooterEmitter.edit(() => {
    NavEmitter.goto('Students')
  })
  FooterEmitter.home(true)
  FooterEmitter.back('Students')

  return (
    <ScrollData
      content={[
        <Wrapper key={nanoid()}>
          <Spacer vertical={20} />
          <THEME.text.h2>{`${student.rank}`}</THEME.text.h2>
          <THEME.text.h2>{`${student.lastName}, ${student.firstName}`}</THEME.text.h2>
          <THEME.text.h2>{`${student.mos}`}</THEME.text.h2>
        </Wrapper>,
      ]}
    />
  )
}

const Wrapper = styled.View``
