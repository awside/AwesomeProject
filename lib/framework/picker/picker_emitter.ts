import { emitter } from '../../my_modules/emitter'


class Picker_Emitter {
  on = (title: string, content: Array<JSX.Element>) => {
    emitter.emit('@Picker-on', title, content)
  }

  off = () => {
    emitter.emit('@Picker-off')
  }
}
export const PickerEmitter = new Picker_Emitter()