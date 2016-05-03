import React from 'react';
import GameModel from './models/GameModel';
import NewGameComponent from './components/NewGameComponent';
import GameListComponent from './components/GameListComponent';
import NewPlayerComponent from './components/NewPlayerComponent';
import BoardComponent from './components/BoardComponent';
import AppBar from 'material-ui/lib/app-bar';
import Utils from './lib/Utils';

class App extends React.Component {
    constructor() {
      super();

      this.games = new GameModel();
      this.games.subscribe(this.updateList.bind(this));
      this.utils = new Utils();

      this.state = {
        games: [],
        currentGame: null,
        currentPlayer: null,
        playerMove: ""
      };
    }

    updateList() {
      this.setState({
        games: this.games.resources
      });

      if (this.state.currentGame !== null) {
        let component = this;
        this.games.resources.map(function(game) {
          if (game._id === component.state.currentGame._id) {
            component.setState({
              currentGame: game
            });
          }
        });
      }
    }

    setPlayer(player) {
      this.setState({
        currentPlayer: player
      });
    }

    createGame() {
      this.games.addResource({
        playerOne: this.state.currentPlayer
      });
    }

    joinGame(game) {
      console.log("Joining game...");
      if (game.playerOne === this.state.currentPlayer || game.playerTwo === this.state.currentPlayer || game.playerTwo === null) {
        if (game.playerOne !== this.state.currentPlayer && game.playerTwo !== this.state.currentPlayer) {
          console.log("Joining game as player two...");
          this.games.save(game, { playerTwo: this.state.currentPlayer });
        }

        this.setState({
          currentGame: game
        });
      } else {
        window.alert("Can't touch this dung dung dung dung");
      }
    }

    containerStyles() {
      return {
        width: "500px",
        height: "500px",
        margin: "auto",
      };
    }

    headerStyle() {
      return {
        textAlign: "center"
      };
    }

    render() {
        return (
          <div>
            <AppBar title="Tic Tac Toe" />
            <div style={this.containerStyles()}>
              <h1 style={this.headerStyle()}></h1>

              { this.state.currentPlayer !== null &&
                <p>Hi, {this.state.currentPlayer}</p> }

              { this.state.currentPlayer === null &&
                <NewPlayerComponent onCreate={this.setPlayer.bind(this)}/> }

              { this.state.currentGame === null &&
                <GameListComponent games={this.state.games} currentPlayer={this.state.currentPlayer} onSelect={this.joinGame.bind(this)}/> }

              { this.state.currentPlayer && this.state.currentGame === null &&
                <NewGameComponent onCreate={this.createGame.bind(this)}/> }

              { this.state.currentGame !== null && <div className="game">
                <p>Player one: {this.state.currentGame.playerOne}</p>
                <p>Player two: {this.state.currentGame.playerTwo}</p>

                <div>
                  <RaisedButton onClick={this.clearCurrentGame.bind(this)} label="back" style={buttonStyle} primary={false} />
                </div>
              </div>}
              <BoardComponent />
            </div>
          </div>
        );
    }
}

export default App;
