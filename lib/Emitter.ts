import { nanoid } from 'nanoid/non-secure'
import { PAGES } from './navigator'

interface IListener {
  id: string
  name: string
  callback: Function
}

let listenerList: Array<IListener> = []

export const emitter = {
  emit: (name: string, ...args: any[]) => {
    listenerList.forEach((e) => {
      if (name == e.name) {
        e.callback(...args)
      }
    })
  },

  on: (name: string, callback: (...args: any[]) => void): string => {
    let id = nanoid()
    listenerList.push({ id: id, name: name, callback: callback })
    return id
  },

  stop: (id: string) => {
    let a: Array<IListener> = []
    listenerList.forEach((e) => {
      if (id != e.id) {
        a.push(e)
      }
      listenerList = a
    })
  },

  changePage: (page: PAGES) => {
    emitter.emit('change page', page)
  },
}