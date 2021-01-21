import React, { createContext, useReducer } from "react"

import GameReducer, { initialState } from "./GameReducer"

export const GameContext = createContext()

export default function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(GameReducer, initialState)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}
