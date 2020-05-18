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
import { Entypo } from '@expo/vector-icons'
import { FooterEmitter } from '../framework/footer/footer_emitter'

const data: Array<{
  text: string
  page: pages
  icon: JSX.Element
  status: boolean
}> = [
  {
    text: 'Student Roster',
    page: 'Students',
    icon: (
      <MaterialIcons
        name="people-outline"
        size={64}
        color={THEME.colors.icon}
      />
    ),
    status: true,
  },
  {
    text: 'TS Gradebooks',
    page: 'Gradebooks',
    icon: <FontAwesome5 name="book-dead" size={64} color={THEME.colors.icon} />,
    status: true,
  },
  {
    text: 'Classes',
    page: 'Home',
    icon: (
      <MaterialCommunityIcons
        name="teach"
        size={64}
        color={THEME.colors.icon}
      />
    ),
    status: false,
  },
  {
    text: 'Calendar',
    page: 'Home',
    icon: <Entypo name="calendar" size={64} color={THEME.colors.icon} />,
    status: false,
  },
]

export const Home = () => {
  HeaderEmitter.set('SWAMP FOX')

  useEffect(() => {}, [])

  let content: Array<JSX.Element> = []
  data.forEach((e) => {
    content.push(
      <Item
        text={e.text}
        page={e.page}
        icon={e.icon}
        status={e.status}
        key={nanoid()}
      />
    )
    content.push(<Spacer vertical={10} key={nanoid()} />)
  })
  content.pop()

  return <ScrollData content={content} />
}

const Item = (props: {
  text: string
  page: pages
  icon: JSX.Element
  status: boolean
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!props.status) return
        NavEmitter.goto(props.page)
      }}
    >
      <Styles.Item style={{ opacity: props.status ? 1.0 : 0.2 }}>
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
