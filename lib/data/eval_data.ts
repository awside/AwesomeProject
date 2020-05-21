import { AsyncStorage } from 'react-native'
import { emitter } from '../my_modules/emitter'
import { nanoid } from 'nanoid/non-secure'

export interface IEval {
  id: string
  studID: string
  date: string
  mission: string
  position: string
}

class EvalData {
  currentEvalID?: string
  evalData: Array<IEval> = [
    {
      id: '2asdfagasdewq',
      studID: '234jsdlfgasc',
      date: '1 May 2020',
      mission: 'Ambush',
      position: 'BTL',
    },
  ]

  get numOfEvals() {
    return this.evalData.length
  }

  getCurrentEval(): IEval {
    return this.getEvalByID(this.currentEvalID ?? '')
  }

  getEvalByOrder(evalNum: number): IEval {
    return this.evalData[evalNum]
  }

  getEvalByID(evalID: string): IEval {
    for (let i = 0; i < this.numOfEvals; i++) {
      if (evalID == this.getEvalByOrder(i).id) {
        return this.getEvalByOrder(i)
      }
    }
    return { id: '', studID: '', date: '', mission: '', position: '' }
  }

  newEval() {
    let id = nanoid()
    this.addEval({ id: id, studID: '', date: '', mission: '', position: '' })
    return id
  }

  addEval(eval_: IEval) {
    this.evalData.push(eval_)
  }

  removeEval(evalID: string) {
    let evalToBeRemoved = this.getEvalByID(evalID)
    let a: Array<IEval> = []
    this.evalData.forEach((e) => {
      if (e != evalToBeRemoved) {
        a.push(e)
      }
    })
    this.evalData = a
  }

  removeAllEvalsWith(studID: string) {
    let a: Array<IEval> = []
    this.evalData.forEach((e) => {
      if (e.studID != studID) {
        a.push(e)
      }
    })
    this.evalData = a
  }

  store = async () => {
    // try {
    //   await AsyncStorage.setItem(
    //     '@GradebookData',
    //     JSON.stringify(StudentData.data)
    //   )
    // } catch (error) {
    //   // Error saving data
    // }
  }

  retrieve = async (callback: () => void) => {
    //   try {
    //     const value = await AsyncStorage.getItem('@GradebookData')
    //     if (value !== null) {
    //       StudentData.data = JSON.parse(value)
    //       callback()
    //     }
    //   } catch (error) {
    //     // Error retrieving data
    //   }
  }
}
export const evalData = new EvalData()

export type grade = 'go' | 'nogo' | 'n/a'

export interface IGradebook {
  title: string
  sections: Array<ISection>
}

export interface ISection {
  title: string
  grade?: grade
  tasks: Array<ITask>
}

export interface ITask {
  title: string
  grade?: grade
  critical?: boolean
}
