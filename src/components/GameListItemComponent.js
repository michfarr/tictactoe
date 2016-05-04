import React from 'react';

const containerStyle = {
  fontFamily: "Roboto"
}

class GameListItemComponent extends React.Component {
  selectGame() {
    this.props.onClick(this.props.game);
  }

  render() {
    return (
      <li style={containerStyle} onClick={this.selectGame.bind(this)}>Game by {this.props.game.playerOne}</li>
    );
  }
}

export default GameListItemComponent;
