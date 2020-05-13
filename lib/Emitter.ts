import { nanoid } from 'nanoid/non-secure'

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
}

export type pages = 'Home' | 'Students' | 'CreateStudent'

export const NavEmitter = {
  goto: (page: pages) => {
    emitter.emit('goto page', page)
  },
}

export const FooterEmitter = {
  back: (page: pages | undefined) => {
    emitter.emit('goto back', page)
  }
}
