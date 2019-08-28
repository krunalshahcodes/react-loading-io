export const convertToPx = (size: number): number => {
  const px = size * 16
  return px
}

export const rotateDegree = (count: number): number => {
  const rotate = 360 / count
  return rotate
}

export const clsx = (...classes: (string | undefined)[]): string =>
  classes.filter(Boolean).join(' ')
