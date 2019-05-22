class TicTacToeModel {
  constructor(squares = null) {
    if (squares === null) {
      squares = Array(9).fill(null);
    }
    this._squares = squares;
  }

  setSquare(i, value) {
    const newSquares = this.squares.slice();
    newSquares[i] = value;
    return new TicTacToeModel(newSquares);
  }

  isMarked(i) {
    return this.squares[i] !== null;
  }

  get squares() {
    return this._squares;
  }
}

export default TicTacToeModel;
