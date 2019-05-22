export default class WinnerModel {
  /**
   * The first winning position
   * @returns {number}
   */
  get a() {
    return this._a;
  }

  /**
   * The second winning position
   * @returns {number}
   */
  get b() {
    return this._b;
  }

  /**
   * The third winning position
   * @returns {number}
   */
  get c() {
    return this._c;
  }

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
    return ([this.a, this.b, this.c].includes(i));
  }

  /**
   * Builds a model representing a winning combination for Tic-Tac-Toe.
   * Parameters a, b, and c represent the square position numbers and the
   * player (X or O) will be represented in winner.
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {string} winner
   */
  constructor(a, b, c, winner) {
    this._a = a;
    this._b = b;
    this._c = c;
    this._winner = winner;
  }
};
