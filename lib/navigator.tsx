import React, { useState } from 'react'
import { Page } from './components/base/page'
import Home from './pages/home'
import Page1 from './pages/students'
import { emitter } from './emitter'
import { StatusBar, View } from 'react-native'
import CreateStudent from './pages/create_student'
import Students from './pages/students'

interface IPage {
  name: string
  page: JSX.Element
}

export const Nav = {
  changePage: (page: 'Home' | 'Students' | 'Create_Student') => {
    emitter.emit('change page', page)
  },
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
  const [currentPage, setCurrentPage] = useState(pages[2].page)

  emitter.on('change page', (pageName: string) => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].name == pageName) {
        setCurrentPage(pages[i].page)
        return
      }
    }
  })

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="dark-content" />
      {currentPage}
    </View>
  )
}
