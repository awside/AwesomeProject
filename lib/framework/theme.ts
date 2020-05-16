import styled from 'styled-components/native'

class _THEME {
  #textSize = 30

  colors: { [key: string]: string } = {
    background: '#33372F',
    component: '#4F554E',
    text: '#E6E4E6',
    green: '#20BF55',
    red: '#ED6A5A',
    line: '#474448',
    blue: '#227C9D',
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
