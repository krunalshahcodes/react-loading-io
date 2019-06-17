import React from 'react'
import PropTypes from 'prop-types'
import { css, keyframes } from '@emotion/core'
import { convertToPx } from '../helpers'

const ball = keyframes`
   0%, 100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 108px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: translate(0, 0);
  }
`

class Ball extends React.Component {
  render () {
    const { size, sizeUnit, color, speed } = this.props
    let scale
    if (sizeUnit === 'em' || sizeUnit === 'rem') {
      scale = convertToPx(size) / 200
    } else {
      scale = size / 200
    }
    const translate = size * scale

    return (
      <div>
        <div
          css={css`
            position: relative;
            width: ${`${size}${sizeUnit}`} !important;
            height: ${`${size}${sizeUnit}`} !important;
            transform: translate(
                -${`${translate}${sizeUnit}`},
                -${`${translate}${sizeUnit}`}
              )
              scale(${scale})
              translate(
                ${`${translate}${sizeUnit}`},
                ${`${translate}${sizeUnit}`}
              );
          `}
        >
          <div
            css={css`
              position: absolute;
              animation: ${ball} ${speed}s linear infinite;
              width: 52px;
              height: 52px;
              top: 20px;
              left: 74px;
              border-radius: 50%;
              background: ${color};
            `}
          ></div>
        </div>
      </div>
    )
  }
}

Ball.propTypes = {
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  speed: PropTypes.number
}

Ball.defaultProps = {
  size: 200,
  sizeUnit: 'px',
  color: '#f08d43',
  thickness: 4,
  speed: 1
}

export default Ball
