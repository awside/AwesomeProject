import { emitter } from '../../my_modules/emitter'
import { THEME } from '../theme'
import { grade } from '../../data/eval_data'

class Header_Emitter {
  set = (text: string) => {
    emitter.emit('@Header-set', text)
  }

  grade = (grade: grade) => {
    switch (grade) {
      case 'go':
        emitter.emit('@Header-color', THEME.colors.green)
      break
      case 'nogo':
        emitter.emit('@Header-color', THEME.colors.red)
      break
      case 'n/a':
        emitter.emit('@Header-color', THEME.colors.dark)
      break
    }
  }

  clear = () => {
    this.set('')
    this.grade('n/a')
  }
}
export const HeaderEmitter = new Header_Emitter()
