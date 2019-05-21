import React, {useState} from 'react';
import Square from './Square';
import TicTacToeModel from '../Models/TicTacToeModel';

const startModel = new TicTacToeModel();

export default function Board() {
  const [boardState, setBoardState] = useState(startModel);

  function clickSquare(i) {
    const value = boardState.nextPlayer;
    if (boardState.winner || boardState.squares[i] !== null) {
      return;
    }
    setBoardState(boardState.setSquare(i, value).advanceTurn());
  }

  function renderSquare(i) {
    const position = 'a' + i;

    let winner = false;
    if (boardState.winner && boardState.winner.hasSquare(i)) {
      winner = true;
    }

    return (
      <Square
        key={i}
        value={boardState.squares[i]}
        style={{gridArea: position}}
        onClick={() => clickSquare(i)}
        winner={winner}
      />
    );
  }

  let status = 'Next player: ' + (boardState.nextPlayer);
  if (boardState.winner) {
    status = "Winner: " + boardState.winner.winner;
  }
  const squareComponents = boardState.squares.map((x, i) => {
    return renderSquare(i);
  });

  return (
    <>
      <div className="status">{status}</div>
      {squareComponents}
    </>
  );
}
