import {useState} from "react";


function App() {
    const Turns = {
        X : "x",
        O:  "o"
    }
    const [board,setBoard] = useState(["x","o","x","x","o","x","x","x","o"])
    const [Turn,setTurn] = useState(Turns.X)

    const Square = ({children,updateSquare ,isSelected, index}) =>
    {   const selected = `square ${isSelected ? "is-selected" : "" } `

        return (<div className={selected}>{children}</div>)
    }

   return(
       <>
           <main className={"board"}>
               <h1>Tic Tac Toe</h1>
               <section className={"game"}>
                   {
                       board.map((_, index) => {
                           return (
                               <Square  key = {index} index={index}>{board[index]}</Square>
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
