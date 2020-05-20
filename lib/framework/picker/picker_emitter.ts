import { emitter } from '../../my_modules/emitter'


class Picker_Emitter {
  on = (title: string, content: Array<JSX.Element>) => {
    emitter.emit('@Picker_on', title, content)
  }
}
export const PickerEmitter = new Picker_Emitter()