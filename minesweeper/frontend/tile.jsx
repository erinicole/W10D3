import React from "react";

export default class Tile extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // debugger
    this.props.updateGame(this.props.tile, e.altKey);
  }

  render() {
    let renderedValue;
    if (this.props.tile.explored === true) {
      let bombCounts = this.props.tile.adjacentBombCount();
      renderedValue = bombCounts;
    } else if (this.props.tile.flagged === true) {
      renderedValue = "F";
    } else {
      renderedValue = "_";
    }

    return (<div className="tile" onClick={this.handleClick}>
      {renderedValue}
    </div>)
  }
}




