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
import { evalData } from '../../data/eval_data'

export const Student = () => {
  let student = studentData.getCurrentStudent()

  HeaderEmitter.set(`Student Profile`)
  FooterEmitter.trash(() => {
    studentData.removeStudent(student.id)
    evalData.removeAllEvalsWith(student.id)
    NavEmitter.goto('Students')
  })
  FooterEmitter.edit(() => {
    NavEmitter.goto('EditStudent')
  })
  FooterEmitter.home(true)
  FooterEmitter.back('Students')

  return (
    <ScrollData
      content={[
        <Wrapper key={nanoid()}>
          <Row>
            <Left>
              <THEME.text.CAPTION
                style={{ color: THEME.colors.highlight }}
              >{`Rank`}</THEME.text.CAPTION>
            </Left>
            <Right>
              <THEME.text.h2>{`${student.rank}`}</THEME.text.h2>
            </Right>
          </Row>
          <Spacer vertical={8} />
          <Row>
            <Left>
              <THEME.text.CAPTION
                style={{ color: THEME.colors.highlight }}
              >{`Last, First`}</THEME.text.CAPTION>
            </Left>
            <Right>
              <THEME.text.h2>{`${student.lastName}, ${student.firstName}`}</THEME.text.h2>
            </Right>
          </Row>
          <Spacer vertical={8} />
          <Row>
            <Left>
              <THEME.text.CAPTION
                style={{ color: THEME.colors.highlight }}
              >{`MOS`}</THEME.text.CAPTION>
            </Left>
            <Right>
              <THEME.text.h2>{`${student.mos}`}</THEME.text.h2>
            </Right>
          </Row>
        </Wrapper>,
      ]}
    />
  )
}

const Wrapper = styled.View`
  padding-left: 20px;
`

const Row = styled.View`
  width: 100%;
  flex-direction: row;
`

const Left = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  border-right-color: ${THEME.colors.line};
  border-right-width: 2px;
  padding-right: 5px;
`

const Right = styled.View`
  flex: 3;
  padding-left: 5px;
  justify-content: center;
`
