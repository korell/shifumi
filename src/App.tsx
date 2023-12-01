import Counter from "./components/Counter.tsx";
import GameArea from "./GameArea.tsx";
import {GameContextProvider} from "./context/GameContext.tsx";

function App() {
    return (
        <GameContextProvider>
            <Counter/>
            <GameArea/>
        </GameContextProvider>
    )
}

export default App
