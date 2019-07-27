import React from 'react'
import PropTypes from 'prop-types'
import { css, keyframes } from '@emotion/core'
import { convertToPx, rotateDegree } from '../helpers'

const spinner = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

function template (i, items, degree) {
  return `
      &:nth-of-type(${i + 1}) {
        transform: rotate(${degree}deg);
        animation-delay: ${(items - (i + 1)) / items}s;
       }
    `
}
function getAnimations (items) {
  let str = ''
  for (let i = 0; i < items; i += 1) {
    const degree = rotateDegree(items) * i
    str += template(i, items, degree)
  }
  return str
}

class Spinner extends React.Component {
  render () {
    const {
      size,
      sizeUnit,
      color,
      speed,
      barCount,
      barHeight,
      barWidth,
      // radius,
      corner
    } = this.props
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
          {Array.apply(null, { length: barCount }).map((e, i) => (
            <div
              key={i}
              css={css`
                left: 94px;
                top: 48px;
                position: absolute;
                animation: ${spinner} linear ${speed}s infinite;
                background: ${color};
                width: ${barWidth * 2}px;
                height: ${barHeight * 2}px;
                border-radius: ${corner * 2}%;
                transform-origin: 6px 52px;
                ${getAnimations(barCount)}
              `}
            ></div>
          ))}
        </div>
      </div>
    )
  }
}

Spinner.propTypes = {
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  speed: PropTypes.number,
  barWidth: PropTypes.number,
  barHeight: PropTypes.number,
  corner: PropTypes.number,
  barCount: PropTypes.number
}

Spinner.defaultProps = {
  size: 200,
  sizeUnit: 'px',
  color: '#f08d43',
  thickness: 4,
  speed: 1,
  barWidth: 6,
  barHeight: 12,
  corner: 20,
  barCount: 12
}

export default Spinner
