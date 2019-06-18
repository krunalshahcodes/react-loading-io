import React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Eclipse } from '..'

expect.addSnapshotSerializer(serializer)

it('eclipse renders correctly', () => {
  const tree = renderer.create(<Eclipse />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('px converts', () => {
  const tree = renderer.create(<Eclipse size={10} sizeUnit="em" />).toJSON()
  expect(tree).toMatchSnapshot()
})
