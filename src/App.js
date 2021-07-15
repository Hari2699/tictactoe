import React, { useState } from 'react'
import Icon from './Components/Icon'

const tiktacArray = new Array(9).fill("")

const App = () => {

    let [isCross, setIsCross] = useState(true)
    let [isCircle, setIsCircle] = useState()
    let [winMessage, setWinMessage] = useState("")

    const playAgain = () => {
        setIsCross(true)
        setIsCircle()
        setWinMessage("")
        tiktacArray.fill("")
    }

    const findWinner = () => {
        if((Array(1) === Array(2) && Array(3)) === isCross || isCircle)
            return winMessage;
        else if((Array(1) === Array(4) && Array(7)) === isCross || isCircle)
            return winMessage;
        else if((Array(1) === Array(5) && Array(9)) === isCross || isCircle)
            return winMessage;
        else if((Array(2) === Array(5) && Array(8)) === isCross || isCircle)
            return winMessage;
        else if((Array(3) === Array(5) && Array(7)) === isCross || isCircle)
            return winMessage;
        else if((Array(3) === Array(6) && Array(9)) === isCross || isCircle)
            return winMessage;
        else if((Array(7) === Array(8) && Array(9)) === isCross || isCircle)
            return winMessage;
        else if((Array(4) === Array(5) && Array(6)) === isCross || isCircle)
            return winMessage;
    }



    return(
        <div>
            <Icon choice="cxxe" />
        </div>
    )
}

export default App;