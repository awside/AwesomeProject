import React from 'react'
import { View } from 'react-native'

export function Padding(props: {
  children?: any
  all?: number
  horizontal?: number
  vertical?: number
}) {
  let left = props.all ?? props.horizontal ?? 0
  let right = props.all ?? props.horizontal ?? 0
  let top = props.all ?? props.vertical ?? 0
  let bottom = props.all ?? props.vertical ?? 0

  return (
    <View
      style={{
        width: '100%',
        paddingLeft: left,
        paddingRight: right,
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      {props.children}
    </View>
  )
}
