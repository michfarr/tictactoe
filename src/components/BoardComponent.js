import React from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
};

class BoardComponent extends React.Component {
  render (){
    return (
      <div>
        <div>
          <Paper style={style} zDepth={1}/>
          <Paper style={style} zDepth={1}/>
          <Paper style={style} zDepth={1}/>
        </div>
        <div>
          <Paper style={style} zDepth={1}/>
          <Paper style={style} zDepth={1}/>
          <Paper style={style} zDepth={1}/>
        </div>
        <div>
          <Paper style={style} zDepth={1}/>
          <Paper style={style} zDepth={1}/>
          <Paper style={style} zDepth={1}/>
        </div>
      </div>
        );
    }
}

export default BoardComponent;
