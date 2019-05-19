import React from "react";
import {NavLink} from 'react-router-dom';
import "./navigation.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink to={'/eli-math'}>Eli's Math Game</NavLink>
      <NavLink to={'/tic-tac-toe'}>Tic-Tac-Toe</NavLink>
      <NavLink to={'/nonogram'}>Nonogram</NavLink>
      <NavLink to={'sudoku'}>Sudoku</NavLink>
    </nav>
  );
};
