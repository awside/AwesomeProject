import { AsyncStorage } from 'react-native'
import { emitter } from '../my_modules/emitter'
import { nanoid } from 'nanoid/non-secure'
import { getGradebookData } from './gradebooks/gradebook_data'

class EvalData {
  currentEvalID?: string
  currentGradebook?: IGradebook
  evalData: Array<IEval> = [
    {
      id: '2asdfagasdewq',
      studID: '234jsdlfgasc',
      date: '1 May 2020',
      mission: 'Ambush',
      position: 'BTL',
      gradebooks: getGradebookData(),
    },
  ]

  get numOfEvals() {
    return this.evalData.length
  }

  getCurrentEval() {
    return this.getEvalByID(this.currentEvalID ?? '')
  }

  getEvalByOrder(evalNum: number): IEval {
    return this.evalData[evalNum]
  }

  getEvalByID(evalID: string) {
    for (let i = 0; i < this.numOfEvals; i++) {
      if (evalID == this.getEvalByOrder(i).id) {
        return this.getEvalByOrder(i)
      }
    }
  }

  newEval() {
    let id = nanoid()
    this.addEval({
      id: id,
      studID: '',
      date: '',
      mission: '',
      position: '',
      gradebooks: getGradebookData(),
    })
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

  updateGradebookGrade = (gradebook: IGradebook) => {
    let go = 0
    let nogo = 0
    let total = 0
    gradebook.sections.forEach((section) => {
      switch (section.grade) {
        case 'go':
          go++
          total++
          break
        case 'nogo':
          nogo++
          total++
          break
      }
    })
    if (nogo == 0 && go == 0) {
      gradebook.grade = 'n/a'
    } else if (nogo == 0 && go > 0) {
      gradebook.grade = 'go'
    } else if (nogo > 0 && go == 0) {
      gradebook.grade = 'nogo'
    } else {
      gradebook.grade = nogo / total >= 0.3 ? 'nogo' : 'go'
    }
  }

  updateEvalGrade = (eval_: IEval) => {
    let go = 0
    let nogo = 0
    let total = 0
    eval_.gradebooks.forEach((gb) => {
      switch (gb.grade) {
        case 'go':
          go += 1 + 1 * +gb.worthDouble
          total += 1 + 1 * +gb.worthDouble
          break
        case 'nogo':
          nogo += 1 + 1 * +gb.worthDouble
          total += 1 + 1 * +gb.worthDouble
          break
      }
    })
    if (nogo == 0 && go == 0) {
      eval_.grade = 'n/a'
    } else if (nogo == 0 && go > 0) {
      eval_.grade = 'go'
    } else if (nogo > 0 && go == 0) {
      eval_.grade = 'nogo'
    } else {
      eval_.grade = nogo / total >= 0.3 ? 'nogo' : 'go'
    }
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

export interface IEval {
  id: string
  studID: string
  date: string
  mission: string
  position: string
  grade?: grade
  gradebooks: Array<IGradebook>
}

export type grade = 'go' | 'nogo' | 'n/a'

export interface IGradebook {
  title: string
  grade?: grade
  worthDouble: boolean
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
