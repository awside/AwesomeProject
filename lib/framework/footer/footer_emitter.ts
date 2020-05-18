import { emitter } from '../../my_modules/emitter'
import { pages } from '../navigator/nav_emitter'

class Footer_Emitter {
  home = (status: boolean) => {
    emitter.emit('@Footer-setHome', status)
  }

  back = (page?: pages) => {
    emitter.emit('@Footer-setBack', page)
  }

  trash = (action?: () => void) => {
    if (action) {
      emitter.emit('@Footer-setTrash', action)
    } else {
      emitter.emit('@Footer-setTrash')
    }
  }

  add = (action?: () => void) => {
    if (action) {
      emitter.emit('@Footer-setAdd', action)
    } else {
      emitter.emit('@Footer-setAdd')
    }
  }

  edit = (action?: () => void) => {
    if (action) {
      emitter.emit('@Footer-setEdit', action)
    } else {
      emitter.emit('@Footer-setEdit')
    }
  }

  cancel = (action?: () => void) => {
    if (action) {
      emitter.emit('@Footer-setCancel', action)
    } else {
      emitter.emit('@Footer-setCancel')
    }
  }

  confirm = (action?: () => void) => {
    if (action) {
      emitter.emit('@Footer-setConfirm', action)
    } else {
      emitter.emit('@Footer-setConfirm')
    }
  }

  clear = () => {
    FooterEmitter.home(false)
    FooterEmitter.back()
    FooterEmitter.trash()
    FooterEmitter.add()
    FooterEmitter.edit()
    FooterEmitter.cancel()
    FooterEmitter.confirm()
  }
}
export const FooterEmitter = new Footer_Emitter()
