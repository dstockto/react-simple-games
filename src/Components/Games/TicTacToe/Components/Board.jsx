import React from 'react';
import Square from './Square';

function renderSquare(i) {
  return <Square key={i} value={i}/>;
}

export default function Board() {
  const status = 'Next player: X';
  const squares = Array(9).fill(null).map((x, i) => renderSquare(i));
  return (
    <>
      <div className="status">{status}</div>
      {squares}
    </>
  );
}
