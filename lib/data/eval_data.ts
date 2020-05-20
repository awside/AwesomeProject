import { AsyncStorage } from 'react-native'
import { emitter } from '../my_modules/emitter'

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

  getEvalByOrder(studNum: number): IEval {
    return this.evalData[studNum]
  }

  getEvalByID(studID: string): IEval {
    for (let i = 0; i < this.numOfEvals; i++) {
      if (studID == this.getEvalByOrder(i).id) {
        return this.getEvalByOrder(i)
      }
    }
    return { id: '', studID: '', date: '', mission: '', position: '' }
  }

  addEval(student: IEval) {
    this.evalData.push(student)
  }

  removeEval(studID: string) {
    let evalToBeRemoved = this.getEvalByID(studID)
    let a: Array<IEval> = []
    this.evalData.forEach((s) => {
      if (s != evalToBeRemoved) {
        a.push(s)
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
