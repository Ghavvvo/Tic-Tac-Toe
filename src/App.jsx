import {useState} from "react";


function App() {
    const Turns = {
        X: "x",
        O: "o"
    }
    const winningBoards = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(Turns.X)
    const [winner, setWinner] = useState(null)

    const Square = ({children, updateBoard, isSelected, index}) => {
        const selected = `square ${isSelected ? "is-selected" : ""} `

        return (<div onClick={() => updateBoard(index)} className={selected}>{children}</div>)
    }

    const changeTurn = () => {
        const newTurn = turn === Turns.X ? Turns.O : Turns.X
        setTurn(newTurn)
    }

    const checkWinner = (boardToCheck) => {
        for (const winningBoard of winningBoards) {
            const [a, b, c] = winningBoard
            if (boardToCheck[a] && boardToCheck[b] === boardToCheck[a] && boardToCheck[b] === boardToCheck[c]) return a
        }
        return null
    }

    const updateBoard = (index) => {
        if ((board[index]) || (winner)) return
        changeTurn()
        const newBoard =writeBoard(index)
        const checkedWinner = checkWinner(newBoard)
        if(checkedWinner) {
            setWinner(checkedWinner)
        }

    }

    const writeBoard = (index) => {
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        return newBoard
    }


    return (
        <>
            <main className={"board"}>
                <h1>Tic Tac Toe</h1>
                <section className={"game"}>
                    {
                        board.map((_, index) => {
                            return (
                                <Square updateBoard={updateBoard} key={index} index={index}>{board[index]}</Square>
                            );
                        })
                    }
                </section>
                <section className={"turn"}>
                    <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
                    <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
                </section>
            </main>
        </>
    )

}

export default App
