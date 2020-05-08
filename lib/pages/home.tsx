import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Page } from '../components/unique/page'
import { Spacer } from '../components/base/spacer'
import { TouchableWithoutFeedback, View } from 'react-native'
import { TextStyles } from '../components/base/text'
import { emitter } from '../emitter'
import ScrollData from '../components/unique/scrolldata'
import { PAGES } from '../navigator'

const ScrollView = styled.ScrollView`
  padding: 20px 40px;
`

export function Home() {
  return <ScrollData title="Home" content={[{text: 'Students', goToPage: PAGES.STUDENTS}]} />
}

