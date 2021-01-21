import React, { useContext, useEffect } from "react"
import uuid from "uuid/v4"

import { GameContext } from "../contexts/GameContext"
import calculateWinner from "../utils/calculateWinner"

import Square from "./Square"
import Player from "./Player"
import Reset from "./Reset"
// import Winner from "./Winner"
import History from "./History"

export default function Board() {
  const {
    state: { squares },
    dispatch,
  } = useContext(GameContext)

  useEffect(() => {
    const winner = calculateWinner(squares)

    if (winner) {
      dispatch({ type: "UPDATE_WINNER", payload: winner })
    }
  }, [dispatch, squares])

  return (
    <div className="board-container">
      <div className="player">
        <Player />
        {/* <Winner /> */}
      </div>
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>

      <div className="history-container">
        <Reset />
        <History />
      </div>
    </div>
  )
}
