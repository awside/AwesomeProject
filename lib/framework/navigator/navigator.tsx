import React, { useState, useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SafeAreaView from 'react-native-safe-area-view'
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
import { Header } from '../header/header'

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

    emitter.on('@Nav_goto', (page: pages) => {
      for (let i = 0; i < pageList.length; i++) {
        if (pageList[i].name == page) {
          FooterEmitter.clear()
          setPage(pageList[i].page)
          return
        }
      }
    })
  }, [])

  return (
    <SafeAreaProvider>
      <BackGround>
        <StatusBar barStyle="light-content" />

        <SafeAreaView
          forceInset={{ bottom: 'never', top: 'always' }}
          style={{ position: 'absolute', flex: 1, width: '100%' }}
        >
          {page}
        </SafeAreaView>

        <SafeAreaView 
          style={{ position: 'absolute', flex: 1, width: '100%' }}>
          <Footer />
        </SafeAreaView>

        <SafeAreaView 
          style={{ position: 'absolute', flex: 1, width: '100%' }}>
          <Header />
        </SafeAreaView>
      </BackGround>
    </SafeAreaProvider>
  )
}

const BackGround = styled.View`
  background-color: ${THEME.colors.background};
`
