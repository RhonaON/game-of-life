import React from 'react'
import cn from 'classnames'

import { Board } from '../types'

import styles from '../styles/BoardView.module.css'

export interface BoardViewProps {
  board: Board
}

export function BoardView(props: BoardViewProps) {
  const { board } = props

  return (
    <div className={styles.board}>
      {board.map((col, x) => (
        <div key={x} className={styles.column}>
          {col.map((cell, y) => (
            <div
              key={y}
              className={cn(styles.cell, {
                [styles['cell-is-alive']]: cell,
                [styles['cell-is-dead']]: !cell,
              })}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
