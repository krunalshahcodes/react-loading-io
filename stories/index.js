import React from 'react'
import { storiesOf } from '@storybook/react'
import { Eclipse, Rolling } from '../src'

storiesOf('Spinners', module)
  .add('Eclipse', () => <Eclipse />)
  .add('Rolling', () => <Rolling />)
