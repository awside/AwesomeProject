import React, { useState } from 'react'
import styled from 'styled-components/native'
import ScrollData, { IScrollDataItem } from '../components/unique/scrolldata'
import { StudentData } from '../data/student_data'
import { FooterEmitter, pages } from '../emitter'

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
  let a: Array<IScrollDataItem> = []
  a.push()
  for (let i = 0; i < StudentData.data.students.length; i++) {
    let rank = StudentData.data.students[i].rank
    let lastName = StudentData.data.students[i].lastName
    a.push({ text: `${rank} ${lastName}`, page: 'Home' })
  }

  FooterEmitter.home('Home')
  FooterEmitter.back('Home')

  return <ScrollData title="Students" content={a} />
}
