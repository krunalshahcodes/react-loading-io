import React from 'react'
import renderer from 'react-test-renderer'
import { Eclipse } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Eclipse />).toJSON()
  expect(tree).toMatchSnapshot()
})
