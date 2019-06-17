import React from 'react'
import renderer from 'react-test-renderer'
import { Rolling } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Rolling />).toJSON()
  expect(tree).toMatchSnapshot()
})
