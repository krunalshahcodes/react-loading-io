import React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Spinner } from '..'

expect.addSnapshotSerializer(serializer)

it('spinner renders correctly', () => {
  const tree = renderer.create(<Spinner />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('px converts', () => {
  const tree = renderer.create(<Spinner size={10} sizeUnit="em" />).toJSON()
  expect(tree).toMatchSnapshot()
})
