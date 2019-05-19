import React from "react";
import './TicTacToeGame.css';
import Board from './Components/Board';

export default function TicTacToeGame() {
  return (
    <div className="game">
      <Board/>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};


