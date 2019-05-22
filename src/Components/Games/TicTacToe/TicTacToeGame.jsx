import React, {useState} from "react";
import './TicTacToeGame.css';
import Board from './Components/Board';
import TicTacToeHistory from './Models/TicTacToeHistory';
import calculateWinner from './Services/calculateWinner';

const emptyHistory = new TicTacToeHistory();

export default function TicTacToeGame() {

  const [history, setHistory] = useState(emptyHistory);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const boardModel = history.latest;

  function clickHandler(i) {
    const marker = (xIsNext) ? 'X' : 'O';
    if (boardModel.isMarked(i) || calculateWinner(boardModel.squares)) {
      return;
    }
    setHistory(history.addMove(boardModel.setSquare(i, marker)));
    setXIsNext(!xIsNext);
    setStepNumber(history.lastBoard);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const winner = calculateWinner(boardModel.squares);

  let status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  if (winner) {
    status = 'Winner: ' + winner.winner;
  }

  const moves = history.history.map((step, move) => {
    const desc = move ? 'Go to move ' + move : 'Go to game start';
    return (
      <li key={'history'+move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <Board squares={boardModel.squares} clickHandler={clickHandler} winner={winner} />
      <div className="status">{status}</div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};


