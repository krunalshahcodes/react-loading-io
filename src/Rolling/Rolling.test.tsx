import React from 'react'
import renderer from 'react-test-renderer'
import { Rolling } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Rolling />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Rolling className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rl-rolling spinner')
})

it('sets CSS vars with props', (): void => {
  const size = 100

  const { root } = renderer.create(
    <Rolling size={size} color='#d36ac2' speed={2} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  const scale = size / 200
  const translate = size * scale

  expect(style).toEqual({
    '--rl-rolling-size': '100px',
    '--rl-rolling-color': '#d36ac2',
    '--rl-rolling-scale': scale,
    '--rl-rolling-translate': `${translate}px`,
    '--rl-rolling-speed': `2s`,
    '--rl-rolling-border': `20px`,
    margin: 20
  })
})
