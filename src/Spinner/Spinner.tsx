import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../helpers'

import './spinner.css'

interface Props {
  className?: string
  size?: number
  color?: string
  speed?: number
  barCount?: number
  barHeight?: number
  barWidth?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rl-spinner-color': string
  '--rl-spinner-size': string
  '--rl-spinner-scale': number
  '--rl-spinner-translate': string
  '--rl-spinner-speed': string
}

const Spinner = ({
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
      className={clsx('rl-spinner', className)}
      style={
        {
          '--rl-spinner-size': `${size}px`,
          '--rl-spinner-color': color,
          '--rl-spinner-scale': scale,
          '--rl-spinner-translate': `${translate}px`,
          '--rl-spinner-speed': `${speed}s`,
          ...style
        } as Styles
      }
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object
}

export default Spinner
