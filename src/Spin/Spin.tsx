import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../helpers'

import './spin.css'

interface Props {
  className?: string
  size?: number
  color?: string
  speed?: number
  width?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rl-spin-color': string
  '--rl-spin-size': string
  '--rl-spin-scale': number
  '--rl-spin-translate': string
  '--rl-spin-speed': string
  '--rl-spin-border': string
}

const Spin = ({
  className,
  color = '#ED4585',
  size = 200,
  width = 10,
  speed = 1,
  style
}: Props): JSX.Element => {
  const scale = size / 200
  const translate = size * scale
  const border = width * 4

  return (
    <div
      className={clsx('rl-spin', className)}
      style={
        {
          '--rl-spin-size': `${size}px`,
          '--rl-spin-color': color,
          '--rl-spin-scale': scale,
          '--rl-spin-translate': `${translate}px`,
          '--rl-spin-speed': `${speed}s`,
          '--rl-spin-border': `${border}px`,
          ...style
        } as Styles
      }
    >
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

Spin.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object
}

export default Spin
