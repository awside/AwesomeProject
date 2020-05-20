import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { Spacer } from '../../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import ScrollData from '../../components/unique/scrolldata'
import { THEME } from '../../framework/theme'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { NavEmitter } from '../../framework/navigator/nav_emitter'
import { studentData } from '../../data/student_data'

export const Eval = () => {
  return <ScrollData content={[<Wrapper key={nanoid()}></Wrapper>]} />
}

const Wrapper = styled.View`
  padding-left: 20px;
`
