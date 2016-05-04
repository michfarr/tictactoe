import React from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
};

class BoardComponent extends React.Component {
  makemove() {
    this.props.onClick(this.props.move);
  }

  render (){
    return (
      <div>
        <Paper style={style} zDepth={1} />

      </div>
        );
    }
}

export default BoardComponent;
