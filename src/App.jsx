import {useState} from "react";
import confetti from "canvas-confetti"
import {Turns, winningBoards} from "./Constants.jsx";
import {OnFinish} from "./components/OnFinish.jsx";
import Turn from "./components/Turn.jsx";
import Game from "./components/Game.jsx";



function App() {

    const [board, setBoard] = useState(() => {
        const boardFromLocalStorage = JSON.parse(window.localStorage.getItem('board'))

        return boardFromLocalStorage ??  Array(9).fill(null)
    })


    const [turn, setTurn] = useState(() => {
        const turnFromLocalStorage = window.localStorage.getItem('turn')
        return turnFromLocalStorage ??  Turns.X
    })
    const [winner, setWinner] = useState(null)



    const changeTurn = () => {
        const newTurn = turn === Turns.X ? Turns.O : Turns.X
        window.localStorage.setItem('turn' , String(newTurn))
        setTurn(newTurn)
    }

    const checkWinner = (boardToCheck) => {
        for (const winningBoard of winningBoards) {
            const [a, b, c] = winningBoard
            if (boardToCheck[a] && boardToCheck[b] === boardToCheck[a] && boardToCheck[b] === boardToCheck[c]) return boardToCheck[a]
        }
        return null
    }

    const checkIsTie = (boardToCheck) => {
       return boardToCheck.every(square => square !== null)
    }

    const updateBoard = (index) => {

        if (board[index] || winner) return;


        changeTurn()
        const newBoard=writeBoard(index)
        const checkedWinner = checkWinner(newBoard)
        const isTie = checkIsTie(newBoard)

        window.localStorage.setItem('board' , JSON.stringify(newBoard))


        if(checkedWinner) {

            confetti()
            setWinner(checkedWinner)
        }

       else if(isTie) {

            setWinner("-")
        }



    }

    const writeBoard = (index) => {
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        return newBoard
    }

    const resetGame = () =>
    {
            setBoard(Array(9).fill(null))
            setTurn(Turns.X)
            setWinner(null)
            window.localStorage.clear()

    }


    return (
        <>
            <main className={"board"}>
                <h1>Tic Tac Toe</h1>
                <button onClick={resetGame}>Reset</button>
                <Game board={board} updateBoard={updateBoard}></Game>
                <h2 className={"Playing"}>Playing :</h2>
                <Turn turn={turn}></Turn>
                <OnFinish resetGame={resetGame} winner={winner}></OnFinish>
            </main>

        </>
    )

}

export default App
