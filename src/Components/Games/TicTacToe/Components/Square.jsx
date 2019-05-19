import React from 'react';

export default function Square({value}) {
  const area = 'a' + value;
  return (
    <button className="square" style={{gridArea: area}}>
      {value}
    </button>
  );
}
