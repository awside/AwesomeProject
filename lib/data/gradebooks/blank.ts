import { IGradebook } from '../eval_data'

export const get__ = () => {
  return JSON.parse(JSON.stringify(__))
}
const __: IGradebook = {
  title: '',
  sections: [
    {
      title: '',
      tasks: [{ title: '' }],
    },
  ],
}
