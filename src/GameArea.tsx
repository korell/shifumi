import ButtonChoice from "./components/ButtonChoice.tsx";
import { useState} from "react";
import {useGameContext} from "./context/GameContext.tsx";

function getRandomItem() {
    const items = ['rock', 'paper', 'scissors']
    return items[Math.min(2, Math.floor(Math.random() * items.length))]
}

function GameArea () {
    const {score, setScore} = useGameContext()
    const [userChoice, setUserChoice] = useState(null)

    function onUserMakeChoice(item:string) {
        // tirage au sort du symbole du computer
        setUserChoice(item)
        const computerChoice = getRandomItem()
        console.log({computerChoice});

        if(computerChoice === 'paper' && item === 'rock') {
            setScore(score.player, score.computer + 1)
        }
        if(computerChoice === 'rock' && item === 'paper') {
            setScore(score.player + 1, score.computer)
        }
    }

    return(
        <div className="GameArea">
            <h1 className="title">Shifumi</h1>
            <p className="description">Choisissez un symbole !</p>
            <div className="GameArea-choices">
                <ButtonChoice item="rock"  onUserMakeChoice={onUserMakeChoice}/>
                <ButtonChoice item="paper" onUserMakeChoice={onUserMakeChoice}/>
                <ButtonChoice item="scissors" onUserMakeChoice={onUserMakeChoice}/>
            </div>
            <div className="GameArea-main">
                <div>Votre choix : {userChoice}</div>
            </div>
        </div>
    )
}

export default GameArea