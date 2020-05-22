import { warno } from './warno'
import { opord } from './opord'
import { movement } from './movement'

export const getGradebookData = () => {
  return [
    JSON.parse(JSON.stringify(warno)),
    JSON.parse(JSON.stringify(opord)),
    JSON.parse(JSON.stringify(movement)),
  ]
}
