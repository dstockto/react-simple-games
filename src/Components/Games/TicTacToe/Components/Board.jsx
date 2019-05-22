import React from 'react';
import Square from './Square';

export default function Board({squares, clickHandler, winner}) {
  /**
   * Creates the Square component given its position. Uses the provided
   * clickHandler and WinnerModel to determine behavior of the Square
   * when it is clicked as well as how it should render based on the
   * contents and if it is part of the winning selection
   *
   * @param {number} i Position of square
   * @returns {Square}
   */
  function renderSquare(i) {
    let isWinner = false;
    if (winner && winner.hasSquare(i)) {
      isWinner = true;
    }

    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => clickHandler(i)}
        winner={isWinner}
        position={'a' + i}
      />
    );
  }

  const squareComponents = squares.map((x, i) => {
    return renderSquare(i);
  });

  return (
    <>
      {squareComponents}
    </>
  );
}
