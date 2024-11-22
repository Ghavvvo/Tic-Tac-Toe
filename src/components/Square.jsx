
// eslint-disable-next-line react/prop-types
export default function Square  ({children, updateBoard, isSelected, index}) {
    const selected = `square ${isSelected ? "is-selected" : ""} `

    return (<div onClick={() => updateBoard(index)} className={selected}>{children}</div>)
}