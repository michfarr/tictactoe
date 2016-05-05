import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ToggleRadioButtonUnchecked from 'material-ui/lib/svg-icons/toggle/radio-button-unchecked';


const style = {
  height: 100,
  width: 100,
  margin: 3,
  textAlign: 'center',
};

var turn = "0"

class BoardComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      labelValue: " "
    }

  }

  makeMove() {
    if (this.state.labelValue === "x" || this.state.labelValue === "o") {

    }
    if (this.state.labelValue === " ") {
      if (turn == "0") {
        this.setState({
          labelValue: <NavigationClose />,
        })
        console.log(turn)
        turn = "1"
      }
      else if (turn == "1") {
        this.setState({
          labelValue: <ToggleRadioButtonUnchecked />,
        })
        console.log(turn)
        turn = "0"
      }
      else {
        console.log("something is wrong")
      }
      this.props.onClick(this.props.movevalue)
      this.state.onClick(this.state.labelValue)
    }
  }

  render (){
    return (
      <FlatButton key={this.props.movevalue} onClick={this.makeMove.bind(this)} style={style} >
        {this.state.labelValue}
      </FlatButton>
    )
  };
}

export default BoardComponent;
