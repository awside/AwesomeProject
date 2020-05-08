import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../base/color'
import { TextStyles } from '../base/text'

export function Page(props: { children?: any }) {
  const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background};
    align-items: center;
  `

  const Container = styled.View`
    width: 100%;
    height: 100%;
  `

  const Content = styled.View`
    width: 100%;
    flex: 1;
  `

  const Footer = styled.View`
    width: 100%;
    height: 50px;
    border-top-color: ${Colors.line};
    border-top-width: 2px;
  `

  return (
    <SafeArea>
      <Container>
        <Content>{props?.children}</Content>
        <Footer></Footer>
      </Container>
    </SafeArea>
  )
}
