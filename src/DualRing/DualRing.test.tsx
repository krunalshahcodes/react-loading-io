import React from 'react'
import renderer from 'react-test-renderer'
import { DualRing } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<DualRing />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<DualRing className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rl-dual-ring spinner')
})

it('sets CSS vars with props', (): void => {
  const size = 100

  const { root } = renderer.create(
    <DualRing size={size} color='#d36ac2' speed={2} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  const scale = size / 200
  const translate = size * scale

  expect(style).toEqual({
    '--rl-dual-ring-size': '100px',
    '--rl-dual-ring-color': '#d36ac2',
    '--rl-dual-ring-scale': scale,
    '--rl-dual-ring-translate': `${translate}px`,
    '--rl-dual-ring-speed': `2s`,
    '--rl-dual-ring-border': `8px`,
    margin: 20
  })
})
