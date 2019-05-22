import React, {useState} from "react";
import './TicTacToeGame.css';
import Board from './Components/Board';
import TicTacToeHistory from './Models/TicTacToeHistory';

const emptyHistory = new TicTacToeHistory();

export default function TicTacToeGame() {

  const [history, setHistory] = useState(emptyHistory);
  const [xIsNext, setXIsNext] = useState(true);
  const boardModel = history.latest;

  function clickHandler(i) {
    const marker = (xIsNext) ? 'X' : 'O';
    if (boardModel.isMarked(i)) {
      return;
    }
    setHistory(history.addMove(boardModel.setSquare(i, marker)));
    setXIsNext(!xIsNext);
  }

  const status = 'Next Player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div className="game">
      <Board squares={boardModel.squares} clickHandler={clickHandler} />
      <div className="status">{status}</div>
      <div className="game-info">
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};


