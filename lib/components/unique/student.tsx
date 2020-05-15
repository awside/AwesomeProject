import React from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { THEME } from '../../framework/theme'

const StudentContainer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  border: 1px solid ${THEME.colors.line};
`

export function Student(props: { rank: string; name: string }) {
  return (
    <StudentContainer>
      <THEME.text.body>{props.rank + ' '}</THEME.text.body>
      <THEME.text.body>{props.name}</THEME.text.body>
    </StudentContainer>
  )
}

function CheckBox(props: { status: 'blank' | 'red' | 'green' }) {
  let color: string
  let name: string
  switch (props.status) {
    case 'blank':
      color = THEME.colors.text
      name = 'checkbox-blank-outline'
      break
    case 'red':
      color = THEME.colors.red
      name = 'checkbox-intermediate'
      break
    case 'green':
      color = THEME.colors.green
      name = 'checkbox-intermediate'
      break
  }

  return <MaterialCommunityIcons name={name} size={24} color={color} />
}
