import { emitter, pages } from '../../my_modules/emitter'

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
}
export const FooterEmitter = new Footer_Emitter()
