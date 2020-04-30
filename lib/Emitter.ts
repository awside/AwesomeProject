import { nanoid } from 'nanoid/non-secure'

interface IListener {
  id: string
  name: string
  callback: Function
}

class Emitter {
  listenerList: Array<IListener> = []

  emit(name: string, ...args: any[]) {
    this.listenerList.forEach((e) => {
      if (name == e.name) {
        e.callback(...args)
      }
    })
  }

  on(name: string, callback: (...args: any[]) => void): string {
    let id = nanoid()
    this.listenerList.push({ id: id, name: name, callback: callback })
    return id
  }

  stop(id: string) {
    let a: Array<IListener> = []
    this.listenerList.forEach((e) => {
      if (id != e.id) {
        a.push(e)
      }
      this.listenerList = a
    })
  }
}

export const emitter = new Emitter()
