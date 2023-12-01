import {useGameContext} from "../context/GameContext.tsx";

function Counter () {
    const {score} = useGameContext()
    return(
        <div className="Counter">
            <div className="Counter-item">Player : {score.player}</div>
            <div className="Counter-item">Computer : {score.computer}</div>
        </div>
    )
}

export default Counter