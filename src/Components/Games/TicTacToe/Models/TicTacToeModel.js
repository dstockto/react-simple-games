class TicTacToeModel {
  /**
   * Create a new TicTacToeModel object. This can be done by providing
   * squares, or if not provided, squares will be set automatically as
   * an array of size 9 containing null values. Expected non-null values
   * for squares would be an array of size 9 containing either 'X', or
   * 'O' or null in each position.
   *
   * @param {[string|null]} squares
   */
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
