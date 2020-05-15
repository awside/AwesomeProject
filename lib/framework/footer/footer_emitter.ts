import { emitter } from '../../my_modules/emitter'
import { pages } from '../navigator/nav_emitter'

class Footer_Emitter {
  home = (page: pages | undefined) => {
    emitter.emit('@Footer-setHome', page)
  }

  back = (page: pages | undefined) => {
    emitter.emit('@Footer-setBack', page)
  }

  button = (text: string, action: () => void) => {
    emitter.emit('@Footer-setButton', text, action)
  }

  clear = () => {
    emitter.emit('@Footer-setHome', undefined)
    emitter.emit('@Footer-setBack', undefined)
    emitter.emit('@Footer-setButton', null, null, true)
  }
}
export const FooterEmitter = new Footer_Emitter()
