import React, { useState, useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SafeAreaView from 'react-native-safe-area-view'
import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { Footer } from '../footer/footer'
import { emitter } from '../../my_modules/emitter'
import { Home } from '../../pages/home'
import { Students } from '../../pages/student/students'
import { pages, NavEmitter } from './nav_emitter'
import { FooterEmitter } from '../footer/footer_emitter'
import { THEME } from '../theme'
import { Header } from '../header/header'
import { AddStudent } from '../../pages/student/add_student'
import { Student } from '../../pages/student/student'
import { EditStudent } from '../../pages/student/edit_student'
import { Evals } from '../../pages/eval/evals'
import { AddEval } from '../../pages/eval/add_eval'
import { Picker } from '../picker/picker'
import { Eval } from '../../pages/eval/eval'
import { EditEval } from '../../pages/eval/edit_eval'
import { Gradebook } from '../../pages/eval/gradebook'
import { HeaderEmitter } from '../header/header_emitter'

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
  {
    name: 'Student',
    page: <Student />,
  },
  {
    name: 'AddStudent',
    page: <AddStudent />,
  },
  {
    name: 'EditStudent',
    page: <EditStudent />,
  },
  {
    name: 'Evals',
    page: <Evals />,
  },
  {
    name: 'Eval',
    page: <Eval />,
  },
  {
    name: 'AddEval',
    page: <AddEval />,
  },
  {
    name: 'EditEval',
    page: <EditEval />,
  },
  {
    name: 'Gradebook',
    page: <Gradebook />,
  },
]

export const Navigator = () => {
  const [page, setPage] = useState<JSX.Element>()

  useEffect(() => {
    emitter.on('@Nav_goto', (page: pages) => {
      for (let i = 0; i < pageList.length; i++) {
        if (pageList[i].name == page) {
          HeaderEmitter.clear()
          FooterEmitter.clear()
          setPage(pageList[i].page)
          return
        }
      }
    })

    NavEmitter.goto('Home')
  }, [])

  return (
    <SafeAreaProvider>
      <BackGround>
        <StatusBar barStyle="light-content" />

        <SafeAreaView
          forceInset={{ bottom: 'always', top: 'always' }}
          style={{ position: 'absolute', top: 30, bottom: 0, width: '100%' }}
        >
          {page}
        </SafeAreaView>

        <SafeAreaView
          style={{ position: 'absolute', height: '100%', width: '100%' }}
        >
          <Footer />
        </SafeAreaView>

        <SafeAreaView style={{ position: 'absolute', width: '100%' }}>
          <Header />
        </SafeAreaView>

        <Picker />
      </BackGround>
    </SafeAreaProvider>
  )
}

const BackGround = styled.View`
  background-color: ${THEME.colors.background};
  flex: 1;
`
