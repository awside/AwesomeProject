import React, { useState } from 'react'
import { Page } from '../components/Page'
import Page1 from './page1'
import Page2 from './page2'
import { emitter } from '../Emitter'

interface IPage {
  name: string
  page: JSX.Element
}

export function changePage(page: 'PAGE 1' | 'PAGE 2') {
  emitter.emit('change page', page)
}

export default function Navigator() {
  let pages: Array<IPage> = [
    {
      name: 'PAGE 1',
      page: (
        <Page>
          <Page1 />
        </Page>
      ),
    },
    {
      name: 'PAGE 2',
      page: (
        <Page>
          <Page2 />
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
