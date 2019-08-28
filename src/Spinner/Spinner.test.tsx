import React from 'react'
import renderer from 'react-test-renderer'
import { Spinner } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Spinner />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Spinner className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rl-spinner spinner')
})

it('sets CSS vars with props', (): void => {
  const size = 100

  const { root } = renderer.create(
    <Spinner size={size} color='#d36ac2' speed={2} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  const scale = size / 200
  const translate = size * scale

  expect(style).toEqual({
    '--rl-spinner-size': '100px',
    '--rl-spinner-color': '#d36ac2',
    '--rl-spinner-scale': scale,
    '--rl-spinner-translate': `${translate}px`,
    '--rl-spinner-speed': `2s`,
    margin: 20
  })
})
