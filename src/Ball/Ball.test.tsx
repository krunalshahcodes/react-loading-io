import React from 'react'
import renderer from 'react-test-renderer'
import { Ball } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Ball />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Ball className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rl-ball spinner')
})

it('sets CSS vars with props', (): void => {
  const size = 100

  const { root } = renderer.create(
    <Ball size={size} color='#d36ac2' speed={2} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  const scale = size / 200
  const translate = size * scale

  expect(style).toEqual({
    '--rl-ball-size': '100px',
    '--rl-ball-color': '#d36ac2',
    '--rl-ball-scale': scale,
    '--rl-ball-translate': `${translate}px`,
    '--rl-ball-speed': `2s`,
    margin: 20
  })
})
