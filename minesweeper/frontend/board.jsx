import React from "react";
import Tile from './tile'
export default function BoardView(props){
  // props.board
  return (
    <div>
      {props.board.grid.map( (row, rowIdx) => {
        return <div className="row" key={rowIdx}>{row.map( (tile, colIdx) => {
          return <Tile tile={tile} key={colIdx + rowIdx} updateGame={props.updateGame} ></Tile>
        })}</div>
      } )}
    </div>
  )
}