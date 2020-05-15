import styled from 'styled-components/native'

class _THEME {
  #textSize = 30

  colors: { [key: string]: string } = {
    background: '#e3e0d7',
    component: '#6E7E7C',
    text: '#575652',
    textLight: '#F3F8F2',
    green: '#20BF55',
    red: '#ED6A5A',
    line: '#a9a8a1',
    button: '#3581B8 ',
  }

  text = {
    title: styled.Text`
      font-size: ${this.#textSize}px;
      color: ${this.colors.text};
      font-weight: bold;
    `,
    title2: styled.Text`
      font-size: ${this.#textSize * 0.8}px;
      color: ${this.colors.text};
      font-weight: bold;
    `,
    heading: styled.Text`
      font-size: ${this.#textSize * 0.7}px;
      color: ${this.colors.text};
      font-weight: bold;
    `,
    body: styled.Text`
      font-size: ${this.#textSize * 0.5}px;
      color: ${this.colors.text};
      font-weight: bold;
    `,
    subscript: styled.Text`
      font-size: ${this.#textSize * 0.4}px;
      color: ${this.colors.text};
      font-weight: bold;
    `,
    CAPTION: styled.Text`
      font-size: ${this.#textSize * 0.4}px;
      color: ${this.colors.text};
      font-weight: bold;
      text-transform: uppercase;
    `,
  }
}
export const THEME = new _THEME()
