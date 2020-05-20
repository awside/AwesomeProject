import { emitter } from '../../my_modules/emitter'

export type pages =
  | 'Home'
  | 'Students'
  | 'Student'
  | 'AddStudent'
  | 'EditStudent'
  | 'Evals'
  | 'AddEval'
  | 'EditEval'

class Nav_Emitter {
  goto = (page: pages) => {
    emitter.emit('@Nav_goto', page)
  }
}
export const NavEmitter = new Nav_Emitter()
