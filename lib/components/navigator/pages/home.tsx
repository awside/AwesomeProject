import React from 'react'
import styled from 'styled-components/native'
import ScrollData from '../../unique/scrolldata'

export function Home() {

  return (
    <ScrollData
      title="Home"
      content={[{ text: 'Students', page: 'Students' }]}
    />
  )
}
