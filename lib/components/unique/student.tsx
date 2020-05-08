import React from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextStyles } from '../base/text'
import { Colors } from '../base/color'

const StudentContainer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  border: 1px solid ${Colors.line};
`

export function Student(props: { rank: string; name: string }) {
  return (
    <StudentContainer>
      <TextStyles.H3>{props.rank + ' '}</TextStyles.H3>
      <TextStyles.H3>{props.name}</TextStyles.H3>
    </StudentContainer>
  )
}

function CheckBox(props: { status: 'blank' | 'red' | 'green' }) {
  let color: string
  let name: string
  switch (props.status) {
    case 'blank':
      color = Colors.text
      name = 'checkbox-blank-outline'
      break
    case 'red':
      color = Colors.red
      name = 'checkbox-intermediate'
      break
    case 'green':
      color = Colors.green
      name = 'checkbox-intermediate'
      break
  }

  return <MaterialCommunityIcons name={name} size={24} color={color} />
}
