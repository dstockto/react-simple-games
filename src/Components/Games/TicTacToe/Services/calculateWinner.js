import WinnerModel from './WinnerModel';

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
    if (winner) {
      return winner;
    }

    if (squares[a] !== null && squares[a] === squares[b] && squares[b] === squares[c]) {
      return new WinnerModel(a, b, c, squares[a]);
    }
    return null;
  }, null);
};
