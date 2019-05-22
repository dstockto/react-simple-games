import WinnerModel from './WinnerModel';

/**
 * Given an array of size 9 representing a TicTacToe game, this function
 * will determine if a player has won. This means the same player, either
 * 'X' or 'O' has connected 3 of their symbols either vertically, horizontally
 * or diagonally.
 *
 * @param {[string|null]} squares
 * @returns {WinnerModel|null}
 */
export default function calculateWinner(squares) {
  const lines = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 8,],
    [0, 4, 8,],
    [2, 4, 6,],
  ];

  return lines.reduce((winner, [a, b, c]) => {
    // Since we're using a reduce, we don't have a way to return early,
    // as in when we first find a winning group. This bit allows us to
    // bypass all additional checks if we've found a winner and just
    // return the first group that won.
    if (winner) {
      return winner;
    }
    if (squares[a] !== null && squares[a] === squares[b] && squares[b] === squares[c]) {
      return new WinnerModel(a, b, c, squares[a]);
    }
    return null;
  }, null);
};
