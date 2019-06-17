import React from 'react'
import { storiesOf } from '@storybook/react'
import { Eclipse, Rolling, DualRing, Ball } from '../src'

storiesOf('Spinners', module)
  .add('Eclipse', () => <Eclipse />)
  .add('Rolling', () => <Rolling />)
  .add('DualRing', () => <DualRing />)
  .add('Ball', () => <Ball />)
