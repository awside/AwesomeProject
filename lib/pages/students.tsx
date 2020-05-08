import React, { useState } from 'react'
import styled from 'styled-components/native'
import { getNanoid } from '../helper'
import { emitter } from '../emitter'
import { View } from 'react-native'
import ScrollData, { ItemData } from '../components/unique/scrolldata'
import { StudentData } from '../data/student_data'
import { Student } from '../components/unique/student'
import { PAGES } from '../navigator'

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

const ScrollView = styled.ScrollView`
  padding: 0px 10px;
`
const Header = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`

export default function Students() {
  let a: Array<ItemData> = []
  const [content, setContent] = useState(a)

  emitter.on('StudentDataUpdate', () => {
    let a: Array<ItemData> = []
    a.push()
    for (let i = 0; i < StudentData.data.students.length; i++) {
      let rank = StudentData.data.students[i].rank
      let lastName = StudentData.data.students[i].lastName
      a.push({text: `${rank} ${lastName}`, goToPage: PAGES.HOME})
    }
    setContent(a)
  })

  return <ScrollData title="Students" content={content} />
}
