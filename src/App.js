import React from 'react';
import GameModel from './models/GameModel';
import NewGameComponent from './components/NewGameComponent';
import GameListComponent from './components/GameListComponent';
import NewPlayerComponent from './components/NewPlayerComponent';
import BoardComponent from './components/BoardComponent';
import AppBar from 'material-ui/lib/app-bar';
import Utils from './lib/Utils';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ToggleRadioButtonUnchecked from 'material-ui/lib/svg-icons/toggle/radio-button-unchecked';

const divStyle = {
  display: 'inline-block'
};

const paperStyle = {
  margin: 1.5,
  backgroundColor: "#EEEEEE"
};

const welcomeStyle = {
  fontFamily: "Roboto",
  fontSize: "30px",
  textAlign: "center"
};

const containerStyle = {
  fontFamily: "Roboto"
};

const buttonStyle = {
  margin: 12
};

const iconStyle = {
  verticalAlign: 'middle'
};

const moveStyle = {
  height: 80,
  width: 80
}

const containerStyles = {
  width: "333px",
  height: "500px",
  margin: "auto"
};

var turn = "0"

class App extends React.Component {
  constructor() {
    super();

    this.games = new GameModel();
    this.games.subscribe(this.updateList.bind(this));

    this.state = {
      games: [],
      currentGame: null,
      currentPlayer: null,
      playerMove: [],
      boardGrid: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      moveValue: "x"
    }
  }

  updateList() {
    this.setState({
      games: this.games.resources
    });

    if (this.state.currentGame !== null) {
      let component = this;
      this.games.resources.map( (game) => {
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
    console.log("Joining game as player one...");
    if (game.playerOne === this.state.currentPlayer ||
        game.playerTwo === this.state.currentPlayer ||
        game.playerTwo === null) {
      if (game.playerOne !== this.state.currentPlayer &&
          game.playerTwo !== this.state.currentPlayer) {
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

  makeMove(data) {
    var newBoardGrid = this.state.boardGrid;
    var moveValue = this.state.moveValue
    var i = data[0];
    var currentValue = data[1];

    if (currentValue === " ") {
      if (!turn) {
        this.setState({
          moveValue: "x" // <NavigationClose style={moveStyle}/>,
        })
        turn = true;
      } else if (turn) {
        this.setState({
          moveValue: "o" // <ToggleRadioButtonUnchecked style={moveStyle}/>,
        })
        turn = false;
      } else {
        console.log("something is wrong")
      }

      newBoardGrid[i] = this.state.moveValue
      this.setState({
        playerMove: null,
        boardGrid: newBoardGrid
      });
      console.log("\tboardGrid's state:" + this.state.boardGrid)
    }
  }

  clearCurrentGame() {
    this.setState({
      currentGame: null
    });
  }

  render() {
    return (
      <div>
        <AppBar title="Tic Tac Toe" titleStyle={{ textAlign: 'center' }}/>
        <div style={containerStyles}>

          { this.state.currentPlayer !== null &&
            <p style={welcomeStyle}>Hi, {this.state.currentPlayer}</p> }

          { this.state.currentPlayer === null &&
            <NewPlayerComponent onCreate={this.setPlayer.bind(this)}/> }

          { this.state.currentGame === null &&
            <GameListComponent games={this.state.games} onSelect={this.joinGame.bind(this)}/> }

          { this.state.currentGame === null &&
            <NewGameComponent onCreate={this.createGame.bind(this)}/> }

          { this.state.currentGame !== null &&
            <div className="game">
              <p style={containerStyle}>Player <NavigationClose style={iconStyle}/> : {this.state.currentGame.playerOne}</p>
              <p style={containerStyle}>Player <ToggleRadioButtonUnchecked style={iconStyle}/> : {this.state.currentGame.playerTwo}</p>
            </div> }

          { this.state.currentGame !== null &&
            <div>
              <Paper style={paperStyle} rounded={false}>
                { this.state.boardGrid.map( (value, index) => {
                  return (
                    <BoardComponent key={index+1} data={[index, value]} onClick={this.makeMove.bind(this)} />
                  );
                }, this) }
              </Paper>
            </div> }

          { this.state.currentGame !== null &&
            <div>
              <RaisedButton style={buttonStyle} onClick={this.clearCurrentGame.bind(this)}>BACK</RaisedButton>
            </div> }


        </div>
      </div>
    );
  }
}

export default App;
