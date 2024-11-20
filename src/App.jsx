import {useState} from "react";


function App() {
    const Turns = {
        X : "x",
        O:  "o"
    }
    const [board,setBoard] = useState(Array(9).fill(null))
    const [Turn,setTurn] = useState(Turns.X)

    const Square = ({children,updateBoard ,isSelected, index}) =>
    {
        const selected = `square ${isSelected ? "is-selected" : "" } `

        return (<div  onClick={()=>updateBoard(index)} className={selected}>{children}</div>)
    }

    const changeTurn = () =>
    {
       const newTurn = Turn === Turns.X ? Turns.O : Turns.X
        setTurn(newTurn)
    }

    const updateBoard = (index) =>
    {
        changeTurn()
        writeBoard(index)
    }

    const writeBoard = (index) =>
    {
        const newBoard = [...board]
        newBoard[index] = Turn
        setBoard(newBoard)
    }



    return(
       <>
           <main className={"board"}>
               <h1>Tic Tac Toe</h1>
               <section className={"game"}>
                   {
                       board.map((_, index) => {
                           return (
                               <Square updateBoard={updateBoard} key = {index} index={index}>{board[index]}</Square>
                           );
                       })
                   }
               </section>
               <section className={"turn"}>
                   <Square isSelected={Turn === Turns.X}>{Turns.X}</Square>
                   <Square isSelected={Turn === Turns.O}>{Turns.O}</Square>
               </section>
           </main>
       </>
   )

}

export default App
