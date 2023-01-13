import "./App.css";
import { GameContextProvider } from "./GameContext";
import Display from "./Display";

function App() {
  return (
    <GameContextProvider>
      <Display />
    </GameContextProvider>
  );
}

export default App;
