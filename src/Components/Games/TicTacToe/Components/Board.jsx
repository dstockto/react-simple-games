import React from 'react';
import Square from './Square';

export default function Board({squares, clickHandler, winner}) {
  function renderSquare(i) {
    let isWinner = false;
    if (winner && [winner.a, winner.b, winner.c].includes(i)) {
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
