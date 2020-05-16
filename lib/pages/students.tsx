import React, { useState } from 'react'
import styled from 'styled-components/native'
import ScrollData from '../components/unique/scrolldata'
import { pages } from '../framework/navigator/nav_emitter'
import { StudentData } from '../data/student_data'
import { FooterEmitter } from '../framework/footer/footer_emitter'
import { THEME } from '../framework/theme'

let studentData = [
  {
    id: '234jsdlfg;',
    rank: 'SGT',
    lastName: 'Grimmard',
    firstName: 'Jake',
    mos: '18B',
    ranger: true,
    recycle: false,
  },
  {
    id: '234jsdsdlfg;',
    rank: 'CPT',
    lastName: 'Connor',
    firstName: 'Joe',
    mos: '18A',
    ranger: false,
    recycle: true,
  },
]

export function Students() {
  let a: Array<{
    text: string
    page: pages
  }> = []
  a.push()
  for (let i = 0; i < StudentData.data.students.length; i++) {
    let rank = StudentData.data.students[i].rank
    let lastName = StudentData.data.students[i].lastName
    a.push({ text: `${rank} ${lastName}`, page: 'Home' })
  }

  FooterEmitter.home()
  FooterEmitter.back()
  FooterEmitter.button1({
    text: 'CANCEL',
    style: {
      color: THEME.colors.red,
      borderColor: THEME.colors.red,
      borderWidth: 2,
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    action: () => {},
  })
  FooterEmitter.button2({
    text: 'OK',
    style: {
      color: THEME.colors.text,
      borderColor: THEME.colors.text,
      borderWidth: 2,
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    action: () => {},
  })

  return <ScrollData title="Students" content={a} />
}
