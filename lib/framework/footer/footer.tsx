import React, { useState } from 'react'
import styled from 'styled-components/native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../../components/base/color'
import { TouchableWithoutFeedback } from 'react-native'
import { emitter } from '../../my_modules/emitter'
import { Button } from '../../components/base/button'
import { pages, NavEmitter } from '../navigator/nav_emitter'

const Footer_ = styled.View`
  width: 100%;
  height: 50px;
  border-top-color: ${Colors.line};
  border-top-width: 2px;
  flex-direction: row;
`

const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export function Footer() {
  const [home, setHome] = useState<pages | undefined>()
  const [back, setBack] = useState<pages | undefined>()
  const [button, setButton] = useState<{ text: string; action: () => void }>()

  emitter.on('@Footer-setHome', (page: pages | undefined) => {
    setHome(page)
  })

  emitter.on('@Footer-setBack', (page: pages | undefined) => {
    setBack(page)
  })

  emitter.on('@Footer-setButton', (text: string, action: () => void) => {
    setButton({ text: text, action: action })
  })

  return (
    <Footer_>
      {home && (
        <TouchableWithoutFeedback
          onPress={() => {
            NavEmitter.goto(home)
          }}
        >
          <Box>
            <MaterialCommunityIcons
              name="home-outline"
              size={24}
              color="black"
            />
          </Box>
        </TouchableWithoutFeedback>
      )}
      {back && (
        <TouchableWithoutFeedback
          onPress={() => {
            NavEmitter.goto(back)
          }}
        >
          <Box>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Box>
        </TouchableWithoutFeedback>
      )}
      {button && (
        <TouchableWithoutFeedback onPress={() => {}}>
          <Box>
            <Button text="ADD" onPress={() => {}} />
          </Box>
        </TouchableWithoutFeedback>
      )}
    </Footer_>
  )
}
