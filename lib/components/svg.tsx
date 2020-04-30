import React from 'react'
import Svg from 'react-native-svg'
import * as SvgItems from 'react-native-svg'
const {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} = SvgItems

export function Fox(props: { size?: number }) {
  return (
      <Svg
        width={props?.size ?? 309}
        height={props?.size ?? 293}
        viewBox="0 0 309 293"
      >
        <G fill="#fff" stroke="#707070" strokeWidth="50">
          <Ellipse cx="154.5" cy="146.5" rx="154.5" ry="146.5" stroke="none" />
          <Ellipse cx="154.5" cy="146.5" rx="129.5" ry="121.5" fill="none" />
        </G>
      </Svg>
  )
}
