// type here = alias
export type Cell = boolean

// generic type = type as a function
export type Board = Array<Array<Cell>>

// tuple in the context of JS = array with a fixed amount of items
// generally a small amount i.e 2 or 3
export type CellId = [number, number]

export type BoardSize = [number, number]
