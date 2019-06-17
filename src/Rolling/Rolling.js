import React from 'react'
import PropTypes from 'prop-types'
import { css, keyframes } from '@emotion/core'
import { convertToPx } from '../helpers'

const rolling = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

class Rolling extends React.Component {
  render () {
    const { size, sizeUnit, thickness, color, speed } = this.props
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
              width: 160px;
              height: 160px;
              border: ${thickness}px solid ${color};
              border-top-color: transparent;
              border-radius: 50%;
              animation: ${rolling} ${speed}s linear infinite;
              top: 100px;
              left: 100px;
              transform: rotate(90deg);
            `}
          ></div>
        </div>
      </div>
    )
  }
}

Rolling.propTypes = {
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  speed: PropTypes.number
}

Rolling.defaultProps = {
  size: 200,
  sizeUnit: 'px',
  color: '#f08d43',
  thickness: 20,
  speed: 1
}

export default Rolling
