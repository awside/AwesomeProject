import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { Footer } from './footer'
import { Colors } from '../base/color'
import { StudentData } from '../../data/student_data'
import { pages, NavEmitter, emitter, FooterEmitter } from '../../emitter'
import { Home } from './pages/home'
import { Students } from './pages/students'

const pageList: Array<{
  name: pages
  page: JSX.Element
}> = [
  {
    name: 'Home',
    page: <Home />,
  },
  {
    name: 'Students',
    page: <Students />,
  },
]

export function Navigator() {
  const [page, setPage] = useState<JSX.Element>()

  useEffect(() => {
    StudentData.retrieve(() => {
      NavEmitter.goto('Home')
    })
  }, [])

  emitter.on('goto page', (page: pages) => {
    for (let i = 0; i < pageList.length; i++) {
      if (pageList[i].name == page) {
        FooterEmitter.home(undefined)
        FooterEmitter.back(undefined)
        setPage(pageList[i].page)
        return
      }
    }
  })

  return (
    <SafeArea>
      <StatusBar barStyle="dark-content" />
      <Content>{page}</Content>
      <Footer />
    </SafeArea>
  )
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.background};
  align-items: center;
`

const Content = styled.View`
  width: 100%;
  flex: 1;
`
