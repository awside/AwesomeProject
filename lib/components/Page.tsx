import React, { useState } from 'react'
import styled from 'styled-components/native'

export function Page(props: { children?: any }) {
  const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: #e0dfd7;
    align-items: center;
    justify-content: flex-start;
  `

  return <Wrapper>{props?.children}</Wrapper>
}
