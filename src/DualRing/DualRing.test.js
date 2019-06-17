import React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { DualRing } from '..'

expect.addSnapshotSerializer(serializer)

it('dual ring renders correctly', () => {
  const tree = renderer.create(<DualRing />).toJSON()
  expect(tree).toMatchSnapshot()
})
