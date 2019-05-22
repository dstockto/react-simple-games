import TicTacToeModel from './TicTacToeModel';

class TicTacToeHistory {
  /**
   * Returns the array of all TicTacToeModel in history
   * @returns {[TicTacToeModel]}
   */
  get history() {
    return this._history;
  }

  /**
   * Creates a new TicTacToeHistory object with the given set of history.
   * The history parameter is an array of TicTacToeModel or null. If it's
   * null, the default starting board will be provided in history automatically.
   *
   * @param {[TicTacToeModel]} history
   */
  constructor(history = null) {
    if (history === null) {
      history = [new TicTacToeModel()];
    }
    this._history = history;
  }

  /**
   * Adds a new TicTacToeModel to the history of the game
   *
   * @param boardState
   * @returns {TicTacToeHistory}
   */
  addMove(boardState) {
    const newHistory = this.history.concat(boardState);
    return new TicTacToeHistory(newHistory);
  }

  /**
   * Returns the latest TicTacToeModel from history
   * @returns {TicTacToeModel}
   */
  get latest() {
    return this.history[this.lastBoard];
  }

  /**
   * Retrieves the number of the latest board in history
   * @returns {number}
   */
  get lastBoard() {
    return this.history.length - 1;
  }

  /**
   * Returns a board by its number in history. If that board number does
   * not exist, it will throw an Error
   * @param {number} boardNum
   * @returns {TicTacToeModel}
   * @throws Error
   */
  getBoard(boardNum) {
    if (boardNum > this.lastBoard) {
      throw new Error("Invalid board number");
    }
    return this.history[boardNum];
  }

  /**
   * Return a new TicTacToeHistory object but with the history limited up
   * to a certain step number
   * @param {number} step
   * @returns {TicTacToeHistory}
   */
  getSlice(step) {
    return new TicTacToeHistory(this.history.slice(0, step + 1));
  }
}

export default TicTacToeHistory;
