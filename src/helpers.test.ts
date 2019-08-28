import { convertToPx, rotateDegree, clsx } from './helpers'

it('px helper works', (): void => {
  expect(convertToPx(1)).toBe(16)
})

it('rotate helper works', (): void => {
  expect(rotateDegree(12)).toBe(30)
})

it('joins non-empty classnames', (): void => {
  const className = clsx('', 'first', '', 'second', '', undefined, '')

  expect(className).toBe('first second')
})
