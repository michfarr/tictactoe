import BaseModel from './BaseModel';

class GameModel extends BaseModel {
  defaults() {
    return {
      playerOne: null,
      playerTwo: null,
      playerOneMove: null,
      playerOneMoves: null,
      playerTwoMove: null,
      playerTwoMoves: null,
      winner: null
    };
  }

  constructor() {
    super('game');
  }
}

export default GameModel;
