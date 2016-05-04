import React from 'react';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

const iconstyle = {
  height: 100,
  width: 100,

}

class PlayerOneMoveComponent extends React.Component {
  render(){
    return (
      <div> <NavigationClose style={iconstyle}/> </div>
    )
  };
}

export default PlayerOneMoveComponent;
