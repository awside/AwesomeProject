import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../framework/header/header_emitter'
import { Spacer } from '../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import ScrollData from '../components/unique/scrolldata'
import { TextInput } from '../components/base/text_input'
import { THEME } from '../framework/theme'

export const AddStudent = () => {
  HeaderEmitter.set('ADD STUDENT')

  let rank: string

  const data: Array<{
    title: string
    placeholder: string
    onChange: (v: string) => void
  }> = [
    {
      title: 'RANK',
      placeholder: 'RANK',
      onChange: (v) => {
        rank = v
      },
    },
    {
      title: 'RANK',
      placeholder: 'RANK',
      onChange: (v) => {
        rank = v
      },
    },
    {
      title: 'RANK',
      placeholder: 'RANK',
      onChange: (v) => {
        rank = v
      },
    },
  ]

  let content: Array<JSX.Element> = []
  content.push(<Spacer vertical={10} key={nanoid()} />)
  data.forEach((e) => {
    content.push(
      <Item
        title={e.title}
        placeholder={e.placeholder}
        onChange={e.onChange}
        key={nanoid()}
      />
    )
    content.push(<Spacer vertical={25} key={nanoid()} />)
  })
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: {
  title: string
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
