import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game'
// console.log("out")
// console.log(Game)
document.addEventListener( "DOMContentLoaded", function(e) {
  // console.log("In")
  // console.log(Tile)
  ReactDOM.render(<Game/>, document.getElementById("root"));
} );