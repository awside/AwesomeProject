import { emitter } from '../../my_modules/emitter'
import { THEME } from '../theme'

class Header_Emitter {
  set = (text: string) => {
    emitter.emit('@Header-set', text)
  }

  color = (color: string) => {
    emitter.emit('@Header-color', color)
  }

  clear = () => {
    this.set('')
    this.color(THEME.colors.dark)
  }
}
export const HeaderEmitter = new Header_Emitter()
