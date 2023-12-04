import {useGameContext} from "../context/GameContext.tsx";
import {Player} from "../main.tsx";
import React from "react";

function Counter () {
    const {score} = useGameContext()
    return(
        <div className="Counter">
            {score.player < 5 && score.computer < 5 &&
            <>
                <div className="Counter-item" style={{'--score':score.player} as React.CSSProperties}>{Player.User} : {score.player}</div>
                <div className="Counter-item" style={{'--score':score.computer} as React.CSSProperties}>{Player.Computer} : {score.computer}</div>
            </>}
            { (score.player >= 5 || score.computer >= 5) &&
                <div className="Counter-result">

                </div>
            }
        </div>
    )
}

export default Counter