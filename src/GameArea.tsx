import ButtonChoice from "./components/ButtonChoice.tsx";
import {useEffect, useState} from "react";
import {useGameContext} from "./context/GameContext.tsx";
import {Choice, Player} from "./main.tsx";

function getItems():Choice[] {
    return [Choice.Rock, Choice.Paper, Choice.Scissors]
}
function getRandomItem() {
    const items = getItems()
    return items[Math.min(2, Math.floor(Math.random() * items.length))]
}

function GameArea () {
    const {
        score,
        setScore,
        roundWinner,
        setRoundWinner,
        gameWinner,
        setGameWinner
    } = useGameContext()
    const [userChoice, setUserChoice] = useState(null as (null|Choice))
    const [computerChoice, setComputerChoice] = useState(null as (null|Choice))

    useEffect(() => {
        if(score.player >= 5 || score.computer >= 5) {
            setGameWinner(score.player > score.computer ? Player.User : Player.Computer)
        }
    }, [score])

    function onUserMakeChoice(userValue:Choice) {
        setUserChoice(userValue)
        setComputerChoice(null)
        const computerValue = getRandomItem()
        setComputerChoice(computerValue)
        setRoundWinner(null)

        if(
            (computerValue === Choice.Paper && userValue === Choice.Rock) ||
            (computerValue === Choice.Scissors && userValue === Choice.Paper) ||
            (computerValue === Choice.Rock && userValue === Choice.Scissors)
        ) {
            setScore(score.player, score.computer + 1)
            setRoundWinner(Player.Computer)
        }
        if(
            (computerValue === Choice.Rock && userValue === Choice.Paper) ||
            (computerValue === Choice.Paper && userValue === Choice.Scissors) ||
            (computerValue === Choice.Scissors && userValue === Choice.Rock)
        ) {
            setScore(score.player + 1, score.computer)
            setRoundWinner(Player.User)
        }
    }

    function onResetGame() {
        setUserChoice(null)
        setComputerChoice(null)
        setGameWinner(null)
        setRoundWinner(null)
        setScore(0, 0)
    }

    return(
        <>
        {gameWinner === null &&
        <div className="GameArea">
            <h1 className="title">Shifumi</h1>
            <p className="description">Choisissez un symbole !</p>
            <div className="GameArea-choices">
                {Object.values(Choice).map(choice =>
                    <ButtonChoice item={choice} key={choice} onUserMakeChoice={onUserMakeChoice}/>
                )}
            </div>
            <div className="GameArea-main">
                {(userChoice || computerChoice) &&
                    <div className="GameArea-round_wrapper">
                        <div className="Choice">
                            <img src={`/${userChoice}.svg`} alt=""/>
                        </div>
                        <div className="ChoiceSeparator">
                            <img src="/lighting.svg" alt=""/>
                        </div>
                        <div className="Choice">
                            <img src={`/${computerChoice}.svg`} alt=""/>
                        </div>
                        <div className="GameArea-round_result">
                            {roundWinner === Player.Computer && 'Perdu :/'}
                            {roundWinner === Player.User && 'Gagné !'}
                            {roundWinner === null && 'Tie'}
                        </div>
                    </div>
                }

            </div>
        </div>
        }
        {gameWinner &&
        <div className="GameResult">
            <div className="GameResult-score">
                {score.player} - {score.computer}
            </div>
            <div className="GameResult-message">
                {gameWinner === Player.User && 'Vous avez gagné ! Bravo !'}
                {gameWinner === Player.Computer && 'Vous avez perdu :/ Retentez votre chance'}
            </div>
            <div className="GameResult-reload">
                <button onClick={onResetGame}>Rejouer</button>
            </div>
        </div>
        }
        </>
    )
}

export default GameArea