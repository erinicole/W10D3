import React from 'react';
import BoardView from './board'
const Board = require("./minesweeper_two").Board; 

export default class Game extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      board: new Board(9, 6)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(){

  }

  render(){
    debugger
    return (
      <div>
        <BoardView updateGame={this.updateGame} board={this.state.board} name="Erin"></BoardView>
      </div>
    )
  }
}