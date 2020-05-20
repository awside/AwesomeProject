import { AsyncStorage } from 'react-native'
import { emitter } from '../my_modules/emitter'

export interface IStudent {
  id: string
  rank: string
  lastName: string
  firstName: string
  mos: string
}

class StudentData {
  #currentStudentID?: string
  #studentData: Array<IStudent> = [
    {
      id: '234jsdlfgasc',
      rank: 'SGT',
      lastName: 'Grimmard',
      firstName: 'Jake',
      mos: '18B',
    },
    {
      id: '234jsdsdlfgrtyu',
      rank: 'CPT',
      lastName: 'Connor',
      firstName: 'Joe',
      mos: '18A',
    },
  ]

  get numOfStudents() {
    return this.#studentData.length
  }

  getCurrentStudent(): IStudent {
    return this.getStudentByID(this.#currentStudentID ?? '')
  }

  setCurrentStudent(studID: string) {
    this.#currentStudentID = studID
  }

  getStudentByOrder(studNum: number): IStudent {
    return this.#studentData[studNum]
  }

  getStudentByID(studID: string): IStudent {
    for (let i = 0; i < this.numOfStudents; i++) {
      if (studID == this.getStudentByOrder(i).id) {
        return this.getStudentByOrder(i)
      }
    }
    return { id: '', rank: '', lastName: '', firstName: '', mos: '' }
  }

  addStudent(student: IStudent) {
    this.#studentData.push(student)
  }

  removeStudent(studID: string) {
    let studentToBeRemoved = this.getStudentByID(studID)
    let a: Array<IStudent> = []
    this.#studentData.forEach((s) => {
      if (s != studentToBeRemoved) {
        a.push(s)
      }
    })
    this.#studentData = a
  }

  store = async () => {
    // try {
    //   await AsyncStorage.setItem(
    //     'StudentData',
    //     JSON.stringify(StudentData.data)
    //   )
    // } catch (error) {
    //   // Error saving data
    // }
  }

  retrieve = async (callback: () => void) => {
    //   try {
    //     const value = await AsyncStorage.getItem('StudentData')
    //     if (value !== null) {
    //       StudentData.data = JSON.parse(value)
    //       callback()
    //     }
    //   } catch (error) {
    //     // Error retrieving data
    //   }
  }
}
export const studentData = new StudentData()
