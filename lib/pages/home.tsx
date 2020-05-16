import React from 'react'
import styled from 'styled-components/native'
import ScrollData from '../components/unique/scrolldata'
import { FooterEmitter } from '../framework/footer/footer_emitter'

export const Home = () => {

  FooterEmitter.home('on')

  return (
    <ScrollData
      title="Home"
      content={[{ text: 'Students', page: 'Students' }]}
    />
  )
}
