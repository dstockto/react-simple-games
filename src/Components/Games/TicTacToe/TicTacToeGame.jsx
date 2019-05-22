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
  const boardModel = history.getBoard(stepNumber);

  function clickHandler(i) {
    const historySlice = history.getSlice(stepNumber);
    const currentBoard = historySlice.latest;
    if (calculateWinner(currentBoard.squares) || currentBoard.isMarked(i)) {
      return;
    }

    const newBoard = currentBoard.setSquare(i, xIsNext ? 'X' : 'O');
    setHistory(historySlice.addMove(newBoard));
    setXIsNext(!xIsNext);
    setStepNumber(historySlice.lastBoard + 1);
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
    let className = '';
    if (move === stepNumber) {
      className = 'current';
    }
    return (
      <li key={'history' + move}>
        <button onClick={() => jumpTo(move)} className={className}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <Board squares={boardModel.squares} clickHandler={clickHandler} winner={winner}/>
      <div className="status">{status}</div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};


