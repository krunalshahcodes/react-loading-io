import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../helpers'

import './eclipse.css'

interface Props {
  className?: string
  size?: number
  color?: string
  speed?: number
  width?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rl-eclipse-color': string
  '--rl-eclipse-size': string
  '--rl-eclipse-scale': number
  '--rl-eclipse-translate': string
  '--rl-eclipse-speed': string
  '--rl-eclipse-thickness': string
}

const Eclipse = ({
  className,
  color = '#ED4585',
  size = 200,
  speed = 1,
  width = 2,
  style
}: Props): JSX.Element => {
  const scale = size / 200
  const translate = size * scale
  const thickness = width * 2

  return (
    <div
      className={clsx('rl-eclipse', className)}
      style={
        {
          '--rl-eclipse-size': `${size}px`,
          '--rl-eclipse-color': color,
          '--rl-eclipse-scale': scale,
          '--rl-eclipse-translate': `${translate}px`,
          '--rl-eclipse-speed': `${speed}s`,
          '--rl-eclipse-thickness': `${thickness}px`,
          ...style
        } as Styles
      }
    >
      <div></div>
    </div>
  )
}

Eclipse.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object
}

export default Eclipse
