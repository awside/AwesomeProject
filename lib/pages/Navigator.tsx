import React, { useState } from 'react'
import { Page } from '../components/Page'
import Home from './page1'
import Page1 from './page2'
import { emitter } from '../Emitter'

interface IPage {
  name: string
  page: JSX.Element
}

export function changePage(page: 'HOME' | 'PAGE 1') {
  emitter.emit('change page', page)
}

export default function Navigator() {
  let pages: Array<IPage> = [
    {
      name: 'HOME',
      page: (
        <Page>
          <Home />
        </Page>
      ),
    },
    {
      name: 'PAGE 1',
      page: (
        <Page>
          <Page1 />
        </Page>
      ),
    },
  ]
  const [currentPage, setCurrentPage] = useState(pages[0].page)

  emitter.on('change page', (pageName: string) => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].name == pageName) {
        setCurrentPage(pages[i].page)
        return
      }
    }
  })

  return currentPage
}
