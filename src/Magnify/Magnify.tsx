import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../helpers'

import './magnify.css'

interface Props {
  className?: string
  size?: number
  color?: string
  speed?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rl-magnify-color': string
  '--rl-magnify-size': string
  '--rl-magnify-scale': number
  '--rl-magnify-translate': string
  '--rl-magnify-speed': string
}

const Magnify = ({
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
      className={clsx('rl-magnify', className)}
      style={
        {
          '--rl-magnify-size': `${size}px`,
          '--rl-magnify-color': color,
          '--rl-magnify-scale': scale,
          '--rl-magnify-translate': `${translate}px`,
          '--rl-magnify-speed': `${speed}s`,
          ...style
        } as Styles
      }
    >
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

Magnify.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Magnify
