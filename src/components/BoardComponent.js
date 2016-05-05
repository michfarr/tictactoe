import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';


const style = {
  height: 100,
  width: 100,
  margin: 3,
  textAlign: 'center',
};

class BoardComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      labelValue: " ",
      turn: "0"
    }

  }

  makeMove() {
    var turn = this.state.turn;
    console.log(turn)
    if (turn == "0") {
      this.setState({
        labelValue: "x",
      })
      this.setState({
        turn: "1"
      })
      console.log(turn)
    }
    if (turn == "1") {
      this.setState({
        labelValue: "o"
      })
      this.setState({
        turn: "0"
      })
      console.log(turn)
    }
    console.log(this.state.labelValue)
    if (this.state.labelValue === "x") {
      console.log("this statement is true")
    }

    this.props.onClick(this.props.movevalue)
    this.state.onClick(this.state.labelValue)
    console.log(this.props.movevalue)

    this.setState({
      labelValue: "o"
    })
  }

  render (){
    return (
      <div key={this.props.movevalue} onClick={this.makeMove.bind(this)} style={style} >
        {this.state.labelValue}
      </div>
    )
  };
}

export default BoardComponent;
