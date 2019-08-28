import React from 'react';
const Board = require('./minesweeper').Board;
import BoardView from './board';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: new Board(9, 6)
    };
    this.updateGame = this.updateGame.bind(this);
    // debugger
  }

  updateGame(tile, flagged){
    flagged ? tile.toggleFlag() : tile.explore()
    this.setState({board: this.state.board})
  }

  render(){
    if(this.state.board.won()){
      alert("I always win!!!")
    } else if (this.state.board.lost()) {
      alert("I'm a sucker!!!")

    }
    return ( <BoardView board={this.state.board} updateGame={this.updateGame} /> )
  }
}