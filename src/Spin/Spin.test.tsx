import React from 'react'
import renderer from 'react-test-renderer'
import { Spin } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Spin />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Spin className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rl-spin spinner')
})

it('sets CSS vars with props', (): void => {
  const size = 100

  const { root } = renderer.create(
    <Spin size={size} color='#d36ac2' speed={2} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  const scale = size / 200
  const translate = size * scale

  expect(style).toEqual({
    '--rl-spin-size': '100px',
    '--rl-spin-color': '#d36ac2',
    '--rl-spin-scale': scale,
    '--rl-spin-translate': `${translate}px`,
    '--rl-spin-speed': `2s`,
    '--rl-spin-border': '40px',
    margin: 20
  })
})
