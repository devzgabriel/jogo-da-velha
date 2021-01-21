import React, { useContext } from "react"

import { GameContext } from "../contexts/GameContext"

export default function Player() {
  const {
    state: { isXNext, whoIsWinner },
  } = useContext(GameContext)

  if (whoIsWinner) {
    return <p className="winner">Player {whoIsWinner} Ganhou!!!</p>
  }
  return <h1>Player: {isXNext ? "X" : "O"}</h1>
}
