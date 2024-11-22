import Square from "./Square.jsx";



// eslint-disable-next-line react/prop-types
export default function Game({board, updateBoard}) {
return (<section className={"game"}>
    {
        // eslint-disable-next-line react/prop-types
        board.map((_, index) => {
            return (
                <Square updateBoard={updateBoard} key={index} index={index}>{board[index]}</Square>
            );
        })
    }
</section>)}