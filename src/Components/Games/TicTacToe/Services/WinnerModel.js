export default class WinnerModel {
  /**
   * The winning player of the game
   * @returns {string}
   */
  get winner() {
    return this._winner;
  }

  /**
   * Determines if the given square is part of the winning combination
   * specified by this WinnerModel. It will return true if it is.
   * @param {number} i
   * @returns {boolean}
   */
  hasSquare(i) {
    return (this._positions.has(i));
  }

  get positions() {
    return Array.from(this._positions.entries(), x => x[0]);
  }

  /**
   * Builds a model representing a winning combination for Tic-Tac-Toe.
   * Winner is the symbol of the winner (X or O) and positions are all
   * the board square numbers that cause the win
   *
   * @param {string} winner
   * @param {[number]} positions
   */
  constructor(winner, positions) {
    this._winner = winner;
    this._positions = new Set(positions);
  }
};
