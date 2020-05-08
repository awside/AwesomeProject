import React, { useState } from 'react'
import { Home } from './pages/home'
import { emitter } from './emitter'
import { StatusBar, View } from 'react-native'
import CreateStudent from './pages/create_student'
import Students from './pages/students'
import { StudentData } from './data/student_data'
import { Page } from './components/unique/page'

export enum PAGES {
  HOME = 'Home',
  STUDENTS = 'Students',
  CREATE_STUDENTS = 'Create_Student',
}

interface IPage {
  name: string
  page: JSX.Element
}

export default function Navigator() {
  let pages: Array<IPage> = [
    {
      name: 'Home',
      page: <Home />,
    },
    {
      name: 'Students',
      page: <Students />,
    },
    {
      name: 'Create_Student',
      page: <CreateStudent />,
    },
  ]

  function getPage(page: PAGES) {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].name == page) {
        return pages[i].page
      }
    }
  }

  StudentData.retrieve()

  const [content, setContent] = useState(getPage(PAGES.HOME))

  emitter.on('change page', (page: PAGES) => {
    setContent(getPage(page))
  })

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <Page>{content}</Page>
    </View>
  )
}
