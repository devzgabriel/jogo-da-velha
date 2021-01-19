import "./App.css"

import GameContextProvider from "./contexts/GameContext"
import Board from "./components/Board"

function App() {
  return <GameContextProvider className="App"></GameContextProvider>
}

export default App
