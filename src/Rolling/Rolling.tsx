import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../helpers'

import './rolling.css'

interface Props {
  className?: string
  size?: number
  color?: string
  speed?: number
  width?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rl-rolling-color': string
  '--rl-rolling-size': string
  '--rl-rolling-scale': number
  '--rl-rolling-translate': string
  '--rl-rolling-speed': string
  '--rl-rolling-border': string
}

const Rolling = ({
  className,
  color = '#ED4585',
  size = 200,
  speed = 1,
  width = 10,
  style
}: Props): JSX.Element => {
  const scale = size / 200
  const translate = size * scale
  const border = width * 2

  return (
    <div
      className={clsx('rl-rolling', className)}
      style={
        {
          '--rl-rolling-size': `${size}px`,
          '--rl-rolling-color': color,
          '--rl-rolling-scale': scale,
          '--rl-rolling-translate': `${translate}px`,
          '--rl-rolling-speed': `${speed}s`,
          '--rl-rolling-border': `${border}px`,
          ...style
        } as Styles
      }
    >
      <div></div>
    </div>
  )
}

Rolling.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object
}

export default Rolling
