import React from 'react'
import { View } from 'react-native'

export function Row(props: { children: any }) {
  return <View style={{ flex: 1, flexDirection: 'row' }}>{props.children}</View>
}
