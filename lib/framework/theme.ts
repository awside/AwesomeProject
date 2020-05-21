import styled from 'styled-components/native'

class _THEME {
  #textSize = 30

  colors: { [key: string]: string } = {
    background: '#33372F',
    component: '#4F554E',
    line: '#4F554E',
    fade: '#4F554E',
    dark: '#2F342F',
    text: '#E6E4E6',
    icon: '#E6E4E6',
    red: '#ad3d34',
    green: '#578052',
    blue: '#227C9D',
    highlight: '#F2D9A4',
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
    h1: styled.Text`
      font-size: ${this.#textSize * 0.7}px;
      color: ${this.colors.text};
      font-weight: bold;
    `,
    h2: styled.Text`
    font-size: ${this.#textSize * 0.6}px;
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
      font-size: ${this.#textSize * 0.33}px;
      color: ${this.colors.text};
      font-weight: bold;
      text-transform: uppercase;
    `,
  }
}
export const THEME = new _THEME()
