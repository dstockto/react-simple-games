import React from 'react';

export default function Square({value, onClick, winner}) {
  let classNames = ['square'];
  if (winner) {
    classNames.push('winner');
  }

  return (
    <button className={classNames.join(' ')} onClick={onClick}>
      {value}
    </button>
  );
}
