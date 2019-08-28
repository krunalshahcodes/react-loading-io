import React from 'react'
import renderer from 'react-test-renderer'
import { Eclipse } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Eclipse />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Eclipse className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rl-eclipse spinner')
})

it('sets CSS vars with props', (): void => {
  const size = 100

  const { root } = renderer.create(
    <Eclipse size={size} color='#d36ac2' speed={2} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  const scale = size / 200
  const translate = size * scale

  expect(style).toEqual({
    '--rl-eclipse-size': '100px',
    '--rl-eclipse-color': '#d36ac2',
    '--rl-eclipse-scale': scale,
    '--rl-eclipse-translate': `${translate}px`,
    '--rl-eclipse-speed': `2s`,
    '--rl-eclipse-thickness': `4px`,
    margin: 20
  })
})
