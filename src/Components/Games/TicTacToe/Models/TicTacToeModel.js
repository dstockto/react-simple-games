import calculateWinner from '../Services/calculateWinner';

class TicTacToeModel {
  constructor(squares = null, xIsNext = true, winner = null) {
    if (squares === null) {
      squares = Array(9).fill(null);
    }
    this._squares = squares;
    this._xIsNext = xIsNext;
    this._winner = winner;
    if (winner === null) {
      this._winner = calculateWinner(squares);
    }
  }

  get winner() {
    return this._winner;
  }

  setSquare(i, value) {
    const newSquares = this.squares.slice();
    newSquares[i] = value;
    return new TicTacToeModel(newSquares, this.xIsNext);
  }

  get nextPlayer() {
    return (this.xIsNext) ? 'X' : 'O';
  }

  advanceTurn() {
    return this.withXisNext(!this.xIsNext);
  }

  withXisNext(value) {
    return new TicTacToeModel(this.squares, value, this.winner);
  }

  get squares() {
    return this._squares;
  }

  get xIsNext() {
    return this._xIsNext;
  }
}

export default TicTacToeModel;
