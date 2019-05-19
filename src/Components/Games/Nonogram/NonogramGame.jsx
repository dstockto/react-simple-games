import React from "react";
import nonogram from './img/nonogram.png';

export default function NonogramGame() {
  return (
    <div>
      <img src={nonogram} alt={"nonogram"} height={'250px'} style={{backgroundColor: 'white'}}/>
      Nonogram Coming Soon!
    </div>
  );
};
