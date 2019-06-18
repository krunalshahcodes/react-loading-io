import React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Ball } from '..'

expect.addSnapshotSerializer(serializer)

it('ball renders correctly', () => {
  const tree = renderer.create(<Ball />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('px converts', () => {
  const tree = renderer.create(<Ball size={10} sizeUnit="em" />).toJSON()
  expect(tree).toMatchSnapshot()
})
