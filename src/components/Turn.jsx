import Square from "./Square.jsx";
import {Turns} from "../Constants.jsx";

// eslint-disable-next-line react/prop-types
export default function Turn({turn}) {
  return (

      <section className={"turn"}>
        <Square  isSelected={turn === Turns.X}>{Turns.X}</Square>
        <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
      </section>)
}