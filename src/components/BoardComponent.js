import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

const style = {
  height: 100,
  width: 100,
  margin: 3,
  textAlign: 'center',
};

class BoardComponent extends React.Component {

  makeMove() {
    this.props.onClick(this.props.data)
  }

  render () {
    return (
      <FlatButton onClick={this.makeMove.bind(this)} style={style}>
        {this.props.data[1]}
      </FlatButton>
    )
  };
}

export default BoardComponent;
