import React from 'react';
import PlayerOneMoveComponent from './PlayerOneMoveComponent';
import PlayerTwoMoveComponent from './PlayerTwoMoveComponent';
import FlatButton from 'material-ui/lib/flat-button';


const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center'
};



class BoardComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      labelValue: " ",
    }
  }

  makeMove() {
    console.log("Clicked")
    this.props.onClick(this.props.movevalue)
    console.log(this.props.movevalue)
    }

  render (){

    return (
      <div>
        <FlatButton onClick={this.makeMove.bind(this)} style={style} zDepth={1} label={this.props.theLabel}/>
      </div>
      )
    };
}

export default BoardComponent;
