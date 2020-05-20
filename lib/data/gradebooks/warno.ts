import { IGradebook } from '../eval_data'

export const getWarno = () => {
  return JSON.parse(JSON.stringify(warno))
}
const warno: IGradebook = {
  title: 'WARNO',
  sections: [
    {
      title: 'Situation',
      tasks: [
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
      ],
    },
    {
      title: 'Mission',
      tasks: [
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
      ],
    },
    {
      title: 'Execution',
      tasks: [
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
      ],
    },
    {
      title: 'Sustainment',
      tasks: [
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
      ],
    },
    {
      title: 'Command & Signal',
      tasks: [
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
        { title: 'brief in 30 seconds' },
      ],
    },
  ],
}
