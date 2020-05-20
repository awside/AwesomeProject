import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { Spacer } from '../../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import { TextInput } from '../../components/base/text_input'
import { THEME } from '../../framework/theme'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { NavEmitter } from '../../framework/navigator/nav_emitter'
import { IEval, evalData } from '../../data/eval_data'
import { ScrollView } from 'react-native'

export const AddEval = () => {
  const [chooseStudent, setChooseStudent] = useState('Choose Student')

  const eval_: IEval = {
    id: nanoid(),
    studID: '',
    date: '',
    mission: '',
    position: '',
  }

  HeaderEmitter.set('New Eval')
  FooterEmitter.cancel(() => {
    NavEmitter.goto('Evals')
  })
  FooterEmitter.confirm(() => {
    evalData.addEval(eval_)
    NavEmitter.goto('Evals')
  })

  const data: Array<{
    placeholder: string
    onChange: (v: string) => void
  }> = [
    {
      placeholder: 'Mission',
      onChange: (v) => {
        eval_.mission = v
      },
    },
    {
      placeholder: 'Position',
      onChange: (v) => {
        eval_.position = v
      },
    },
    {
      placeholder: 'Date',
      onChange: (v) => {
        eval_.date = v
      },
    },
  ]

  let content: Array<JSX.Element> = []
  content.push(<Spacer vertical={25} key={nanoid()} />)
  data.forEach((e) => {
    content.push(
      <Item placeholder={e.placeholder} onChange={e.onChange} key={nanoid()} />
    )
    content.push(<Spacer vertical={25} key={nanoid()} />)
  })
  content.pop()

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 500,
        paddingHorizontal: 25,
      }}
    >
      <ChooseStudent><THEME.text.body>{chooseStudent}</THEME.text.body></ChooseStudent>
      {content}
    </ScrollView>
  )
}

const Item = (props: {
  placeholder: string
  onChange: (v: string) => void
}) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChange={props.onChange}
      key={nanoid()}
    />
  )
}

const ChooseStudent = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${THEME.colors.component};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`
