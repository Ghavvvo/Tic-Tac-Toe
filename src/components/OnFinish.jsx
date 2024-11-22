import Square from "./Square.jsx";

// eslint-disable-next-line react/prop-types
export function OnFinish ({winner, resetGame }) {
    if(!winner) return null;

    return (<section className={"winner"}>
            <div className={"text"}>
                <h2>{winner === "-" ? "Empate" : "Ganó : "}</h2>
                <header className={"win"}>
                    {<Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>New Game</button>
                </footer>
            </div>
        </section>)



}