import React, { useState } from 'react'
import styled from 'styled-components/native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../base/color'
import { TouchableWithoutFeedback } from 'react-native'
import { NavEmitter, pages, emitter } from '../../emitter'

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

  emitter.on('setHome', (page: pages | undefined) => {
    setHome(page)
  })

  emitter.on('setBack', (page: pages | undefined) => {
    setBack(page)
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
    </Footer_>
  )
}
