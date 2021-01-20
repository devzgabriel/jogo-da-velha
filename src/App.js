import React, { useEffect } from "react"
import "./App.css"

import GameContextProvider from "./contexts/GameContext"
import Board from "./components/Board"

export default function Home() {
  useEffect(() => {
    document.title = "Jogo da velha com React"
  }, [])

  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  )
}
