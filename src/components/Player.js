import React, { useContext } from "react"

import { GameContext } from "../contexts/GameContext"

export default function Player() {
  const { isXNext, whoIsWinner } = useContext(GameContext)

  if (whoIsWinner) return <></>
  return <h1>Player: {isXNext ? "X" : "O"}</h1>
}
