import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { emitter } from '../../my_modules/emitter'
import { THEME } from '../theme'
import SafeAreaView from 'react-native-safe-area-view'
import { TouchableWithoutFeedback, View, Text } from 'react-native'

export function Picker() {
  const [status, setStatus] = useState(false)
  const [title, setTitle] = useState('Picker')
  const [content, setContent] = useState<Array<JSX.Element>>([
    <View>
      <Text>Choice</Text>
    </View>,
  ])

  useEffect(() => {
    emitter.on('@Picker-on', (title: string, content: Array<JSX.Element>) => {
      setTitle(title)
      setContent(content)
      setStatus(true)
    })

    emitter.on('@Picker-off', () => {
      setStatus(false)
    })
  }, [])

  return status ? (
    <Wrapper>
      <SafeAreaView
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          paddingHorizontal: 10,
        }}
      >
        <Header>
          <THEME.text.h1>{title}</THEME.text.h1>
        </Header>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          {content}
        </ScrollView>
        <TouchableWithoutFeedback
          onPress={() => {
            setStatus(false)
          }}
        >
          <Footer>
            <THEME.text.body>CANCEL</THEME.text.body>
          </Footer>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Wrapper>
  ) : (
    <View />
  )
}

const Wrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000080;
`

const Header = styled.View`
  width: 100%;
  height: 50px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.colors.component};
`

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${THEME.colors.dark};
`

const Footer = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.colors.component};
`
