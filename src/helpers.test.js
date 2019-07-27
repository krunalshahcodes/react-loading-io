import { convertToPx, rotateDegree } from './helpers'

it('px helper works', () => {
  expect(convertToPx(1)).toBe(16)
})

it('rotate helper works', () => {
  expect(rotateDegree(12)).toBe(30)
})
