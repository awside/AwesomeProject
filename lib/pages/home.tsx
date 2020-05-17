import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import ScrollData from '../components/unique/scrolldata'
import { HeaderEmitter } from '../framework/header/header_emitter'
import { THEME } from '../framework/theme'
import { pages, NavEmitter } from '../framework/navigator/nav_emitter'
import { TouchableWithoutFeedback } from 'react-native'
import { nanoid } from 'nanoid/non-secure'
import { Spacer } from '../components/base/spacer'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const data: Array<{
  text: string
  page: pages
  icon: JSX.Element
}> = [
  {
    text: 'Students',
    page: 'Students',
    icon: <MaterialIcons name="people-outline" size={64} color={THEME.colors.icon} />,
  },
  {
    text: 'TS Gradebooks',
    page: 'Home',
    icon: <FontAwesome5 name="book-dead" size={64} color={THEME.colors.icon} />,
  },
  {
    text: 'Classes',
    page: 'Home',
    icon: <MaterialCommunityIcons name="teach" size={64} color={THEME.colors.icon} />,
  },
]

export const Home = () => {
  HeaderEmitter.set('HOME')

  useEffect(() => {}, [])

  let content: Array<JSX.Element> = []
  data.forEach((e) => {
    content.push(
      <Item text={e.text} page={e.page} icon={e.icon} key={nanoid()} />
    )
    content.push(<Spacer vertical={10} key={nanoid()} />)
  })
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: { text: string; page: pages; icon: JSX.Element }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        NavEmitter.goto(props.page)
      }}
    >
      <Styles.Item>
        {props.icon}
        <THEME.text.h2 style={{ color: THEME.colors.text }}>
          {props.text}
        </THEME.text.h2>
      </Styles.Item>
    </TouchableWithoutFeedback>
  )
}

const Styles = {
  Item: styled.View`
    height: 130px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 2px solid ${THEME.colors.dark};
    background-color: ${THEME.colors.component};
    border-radius: 8px;
  `,
}
