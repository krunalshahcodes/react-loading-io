import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../helpers'

import './ball.css'

interface Props {
  className?: string
  size?: number
  color?: string
  speed?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rl-ball-color': string
  '--rl-ball-size': string
  '--rl-ball-scale': number
  '--rl-ball-translate': string
  '--rl-ball-speed': string
}

const Ball = ({
  className,
  color = '#ED4585',
  size = 200,
  speed = 1,
  style
}: Props): JSX.Element => {
  const scale = size / 200
  const translate = size * scale

  return (
    <div
      className={clsx('rl-ball', className)}
      style={
        {
          '--rl-ball-size': `${size}px`,
          '--rl-ball-color': color,
          '--rl-ball-scale': scale,
          '--rl-ball-translate': `${translate}px`,
          '--rl-ball-speed': `${speed}s`,
          ...style
        } as Styles
      }
    >
      <div></div>
    </div>
  )
}

Ball.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Ball
