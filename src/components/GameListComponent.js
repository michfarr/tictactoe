import React from 'react';
import GameListItemComponent from './GameListItemComponent';

class GameListComponent extends React.Component {
  selectGame(game) {
    this.props.onSelect(game);
  }

  render() {
    let component = this;
    return (
      <ul>
        {this.props.games.map(function(game) {
        return (<li key={game._id}>Game by {game.playerOne}</li>);
        })}
      </ul>
    );
  }
}

export default GameListComponent;
