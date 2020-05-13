import { AsyncStorage } from 'react-native'
import { emitter } from '../emitter'

export const StudentData = {
  data: <IStudents>{},
  store: async () => {
    try {
      await AsyncStorage.setItem(
        'StudentData',
        JSON.stringify(StudentData.data)
      )
    } catch (error) {
      // Error saving data
    }
  },
  retrieve: async (callback: () => void) => {
    try {
      const value = await AsyncStorage.getItem('StudentData')
      if (value !== null) {
        StudentData.data = JSON.parse(value)
        callback()
      }
    } catch (error) {
      // Error retrieving data
    }
  }
}

interface IStudents {
  students: Array<IStudent>
}

interface IStudent {
  id: string
  rank: string
  lastName: string
  firstName: string
  mos: string
  ranger: boolean
  recycle: boolean
  go: undefined | boolean
  evals: Array<IEval>
}

interface IEval {}
