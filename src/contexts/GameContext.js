import React, { createContext } from "react"

export const GameContext = createContext()

export default function GameContextProvider({ children }) {
  return (
    <GameContext.Provider value="aaaaaaaaaaaaaaaaaa">
      {children}
    </GameContext.Provider>
  )
}
