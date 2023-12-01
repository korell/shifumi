import {createContext, useContext, useState} from "react";

const GameContext = createContext({
    score: {
        player: 0,
        computer: 0
    },
    userChoice: null,
    computerChoise: null,
    setScore: (player:number, computer:number) => undefined
})

export const GameContextProvider = ({children}) => {
    const [score, setScore] = useState({player:0, computer: 0})
    const setScores = (playerScore:number, computerScore:number) => {
        setScore({player: playerScore, computer: computerScore})
    }
    return <GameContext.Provider value={{score, setScore:setScores}}>
        {children}
    </GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext)