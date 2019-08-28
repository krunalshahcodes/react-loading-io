import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../helpers'

import './dualring.css'

interface Props {
  className?: string
  size?: number
  color?: string
  speed?: number
  width?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rl-dual-ring-color': string
  '--rl-dual-ring-size': string
  '--rl-dual-ring-scale': number
  '--rl-dual-ring-translate': string
  '--rl-dual-ring-speed': string
  '--rl-dual-ring-border': string
}

const DualRing = ({
  className,
  color = '#ED4585',
  size = 200,
  speed = 1,
  width = 4,
  style
}: Props): JSX.Element => {
  const scale = size / 200
  const translate = size * scale
  const border = width * 2

  return (
    <div
      className={clsx('rl-dual-ring', className)}
      style={
        {
          '--rl-dual-ring-size': `${size}px`,
          '--rl-dual-ring-color': color,
          '--rl-dual-ring-scale': scale,
          '--rl-dual-ring-translate': `${translate}px`,
          '--rl-dual-ring-speed': `${speed}s`,
          '--rl-dual-ring-border': `${border}px`,
          ...style
        } as Styles
      }
    >
      <div></div>
    </div>
  )
}

DualRing.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object
}

export default DualRing
