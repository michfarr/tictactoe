import React from 'react';
import ToggleRadioButtonUnchecked from 'material-ui/lib/svg-icons/toggle/radio-button-unchecked';

const iconstyle = {
  height: 100,
  width: 100,

}

class PlayerTwoMoveComponent extends React.Component {
  render(){
    return (
      <div> <ToggleRadioButtonUnchecked style={iconstyle}/> </div>
    )
  };
}

export default PlayerTwoMoveComponent;
