import React from 'react';
import Square from './Square';

export default function Board({squares, clickHandler}) {
  function renderSquare(i) {
    const position = 'a' + i;

    // TODO: Fix winner logic
    let winner = false;

    // TODO: Fix square rendering and clicks
    return (
      <Square
        key={i}
        value={squares[i]}
        style={{gridArea: position}}
        onClick={() => clickHandler(i)}
        winner={winner}
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
