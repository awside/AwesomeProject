import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { Footer } from '../footer/footer'
import { StudentData } from '../../data/student_data'
import { emitter } from '../../my_modules/emitter'
import { Home } from '../../pages/home'
import { Students } from '../../pages/students'
import { pages, NavEmitter } from './nav_emitter'
import { FooterEmitter } from '../footer/footer_emitter'
import { THEME } from '../theme'

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

export const Navigator = () => {
  const [page, setPage] = useState<JSX.Element>()

  useEffect(() => {
    StudentData.retrieve(() => {
      NavEmitter.goto('Home')
    })
  }, [])

  emitter.on('@Nav_goto', (page: pages) => {
    for (let i = 0; i < pageList.length; i++) {
      if (pageList[i].name == page) {
        FooterEmitter.clear()
        setPage(pageList[i].page)
        return
      }
    }
  })

  return (
    <SafeArea>
      <StatusBar barStyle="light-content" />
      <Content>{page}</Content>
      <Footer />
    </SafeArea>
  )
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${THEME.colors.background};
  align-items: center;
`

const Content = styled.View`
  width: 100%;
  flex: 1;
`
