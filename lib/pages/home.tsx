import React from 'react'
import styled from 'styled-components/native'
import ScrollData from '../components/unique/scrolldata'
import { FooterEmitter } from '../framework/footer/footer_emitter'

export const Home = () => {
  FooterEmitter.home(false)

  return (
    <ScrollData
      content={[
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
        { text: 'Students', page: 'Students' },
      ]}
    />
  )
}
