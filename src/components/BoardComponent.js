import React from 'react';
import Paper from 'material-ui/lib/paper';
import FontIcon from 'material-ui/lib/font-icon';

const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
};

class BoardComponent extends React.Component {

  makeMove() {
    console.log("Clicked")
    this.props.onClick(this.props.movevalue);
  }

  render (){
    return (
      <div>
        <Paper onClick={this.makeMove.bind(this)} style={style} zDepth={1} />
      </div>
        );
    }
}

export default BoardComponent;
