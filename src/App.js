import React from 'react';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TicTacToeGame from './Components/Games/TicTacToe/TicTacToeGame';
import NonogramGame from './Components/Games/Nonogram/NonogramGame';
import SudokuGame from './Components/Games/Sudoku/SudokuGame';
import EliMathGame from './Components/Games/EliMath/EliMathGame';
import Settings from './Components/Settings';
import {UserProvider} from './Context';

function App() {

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Route path={'/'} component={Header}/>
          <section className={'content'}>
            <Route path={'/eli-math'} component={EliMathGame}/>
            <Route path={'/tic-tac-toe'} component={TicTacToeGame}/>
            <Route path={'/nonogram'} component={NonogramGame}/>
            <Route path={'/sudoku'} component={SudokuGame}/>
            <Route path={'/settings'} component={Settings}/>
          </section>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
