import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Board } from '../types'
import { generateRandomBoard } from '../helpers'

const Home: NextPage = () => {
  const [board, setBoard] = useState<Board>(() => generateRandomBoard([10, 10]))

  console.log('board', board)

  return (
    <div className={styles.container}>
      <Head>
        <title>Game of Life</title>
        <meta name="description" content="Conway's Game of Life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the game of life!</h1>
      </main>
    </div>
  )
}

export default Home
