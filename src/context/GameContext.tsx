import {createContext, useContext, useState} from "react";
import {Player} from "../main.tsx";

const GameContext = createContext({
    score: {
        player:0,
        computer:0
    },
    gameWinner: null as (Player|null),
    roundWinner: null as (Player|null),
    setGameWinner(roundWinner: Player|null): void {},
    setRoundWinner(roundWinner: Player|null): void {},
    setScore(player: number, computer: number): void {}
})

export const GameContextProvider = ({children}) => {
    const [score, setScore] = useState({player: 0, computer: 0})
    const [roundWinner, setRoundWinner] = useState<Player|null>(null)
    const [gameWinner, setGameWinner] = useState<Player|null>(null)
    const setScores = (playerScore: number, computerScore: number): void => {
        setScore({player: playerScore, computer: computerScore})
    }

    const setRoundWinnerHandler = (player: Player):void => {
        setRoundWinner(player)
    }

    const setGameWinnerHandler = (player: Player):void => {
        setGameWinner(player)
    }

    return <GameContext.Provider value={{
        score,
        setScore: setScores,
        setRoundWinner: setRoundWinnerHandler,
        roundWinner,
        gameWinner,
        setGameWinner: setGameWinnerHandler
    }}>
        {children}
    </GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext)