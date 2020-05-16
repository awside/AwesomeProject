import { emitter } from '../../my_modules/emitter'
import { pages } from '../navigator/nav_emitter'
import { StyleProp, TextStyle } from 'react-native'

class Footer_Emitter {
  home = (status: 'on' | 'off') => {
    emitter.emit('@Footer-setHome', status == 'on')
  }

  back = (page: pages | undefined) => {
    emitter.emit('@Footer-setBack', page)
  }

  button1 = (options?: {
    text?: string
    style?: StyleProp<TextStyle>
    action?: () => void
  }) => {
    emitter.emit('@Footer-setButton1', options)
  }

  button2 = (options?: {
    text?: string
    style?: StyleProp<TextStyle>
    action?: () => void
  }) => {
    emitter.emit('@Footer-setButton2', options)
  }

  clear = () => {
    emitter.emit('@Footer-setHome', 'off')
    emitter.emit('@Footer-setBack', undefined)
    emitter.emit('@Footer-setButton1')
    emitter.emit('@Footer-setButton2')
  }
}
export const FooterEmitter = new Footer_Emitter()
