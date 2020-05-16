import { emitter } from '../../my_modules/emitter'

class Header_Emitter {
  set = (text: string) => {
    emitter.emit('@Header-set', text)
  }
}
export const HeaderEmitter = new Header_Emitter()
