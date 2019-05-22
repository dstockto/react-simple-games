import React from 'react';

export default function Square({value, onClick, winner, position}) {
  let classNames = ['square'];
  if (winner) {
    classNames.push('winner');
  }

  return (
    <button
      style={{gridArea: position}}
      className={classNames.join(' ')}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
