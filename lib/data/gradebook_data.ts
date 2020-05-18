import { AsyncStorage } from 'react-native'
import { emitter } from '../my_modules/emitter'

interface IGradebook {}

class GradebookData {
  #currentStudentID?: string
  #studentData: Array<IGradebook> = []

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
export const gradebookData = new GradebookData()
