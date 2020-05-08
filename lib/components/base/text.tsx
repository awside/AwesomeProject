import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Colors } from './color'

const TextSize = 30

export const TextStyles = {
  H1: styled.Text`
    font-size: ${TextSize}px;
    color: ${Colors.text};
    font-weight: bold;
  `,
  H2: styled.Text`
    font-size: ${TextSize * 0.8}px;
    color:  ${Colors.text};
    font-weight: bold;
  `,
  H3: styled.Text`
    font-size: ${TextSize * 0.6}px;
    color:  ${Colors.text};
    /* font-weight: bold; */
  `,
  Tiny: styled.Text`
    font-size: ${TextSize * 0.4}px;
    color:  ${Colors.text};
    font-weight: bold;
  `,
}
