import { Board, BoardSize, Cell } from './types'

export function generateRandomBoard(size: BoardSize): Board {
  // destructuring a tuple requires [] brackets
  const [width, height] = size

  // map function requires array to be filled with something i.e 'null' in order to have something to map over
  return new Array(width).fill(null).map((col) => {
    return new Array(height).fill(null).map((cell) => {
      return generateRandomCell()
    })
  })
}

// generates true/false randomly
function generateRandomCell(): Cell {
  return Math.random() < 0.5
}
