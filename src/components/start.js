const levels = [
  {
    squares: 1,
    colors: ['green'],
  },
  {
    squares: 8,
    colors: ['green', 'grey'],
  },
  {
    squares: 8,
    colors: ['green', 'grey', 'blue', 'purple', 'red'],
  },
]

const green = { point: 1, color: 'green' }
const red = { point: -1, color: 'red' }
const blue = { point: 2, color: 'blue' }
const purple = { point: 4, color: 'purple' }
const grey = { point: 0, color: 'grey' }

const random = (limit) => Math.floor(Math.random() * limit)

const createButton = (color) => {
  switch (color) {
    case 'green':
      return green
    case 'grey':
      return grey
    case 'red':
      return red
    case 'purple':
      return purple
    case 'blue':
      return blue
    default:
      break
  }
}

const validGame = (buttons) => {
  let antallAvRed = 0
  let antallAvGreen = 0
  let antallAvBlue = 0
  let antallAvPurple = 0

  buttons.forEach((button) => {
    if (button.color === 'green') {
      antallAvGreen += 1
    }
    if (button.color === 'red') {
      antallAvRed += 1
    }
    if (button.color === 'blue') {
      antallAvBlue += 1
    }
    if (button.color === 'purple') {
      antallAvPurple += 1
    }
  })
  if (
    antallAvRed > 0 &&
    (antallAvBlue > 0 || antallAvPurple > 0 || antallAvGreen > 0)
  ) {
    return true
  }
  return false
}

export const createGame = (currentLevel) => {
  let level = currentLevel
  if (currentLevel >= 2) {
    level = 2
  }
  const { squares } = levels[level]
  const { colors } = levels[level]
  const buttons = []
  for (let i = 0; i < squares; i++) {
    const button = createButton(colors[random(colors.length)])
    buttons.push(button)
  }
  const total = buttons.reduce((agg, item) => {
    if (item.point > 0) {
      return agg + item.point
    }
    return agg
  }, 0)

  if (level < 2) {
    return { buttons, total }
  }

  if (validGame(buttons)) {
    return { buttons, total }
  }
  return createGame(level)
}
