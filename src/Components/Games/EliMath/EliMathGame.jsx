import React, { useState } from "react";



// function myAlert(idName){
//   const result = document.getElementById("idName").innerHTML;
//   alert(result);
// }

class numberGenerator {
  const (firstNum, operator, secNum, userAnswer){
    this.firstNum = firstNum;
    this.operator = operator;
    this.secNum = secNum;
    this.userAnswer = userAnswer;
  }

  add() {

    return this.firstNum + this.secondNum;
  }

}

// const firstNum = document.getElementById("firstNum").innerHTML;
// const secNum = document.getElementById("secNum").innerHTML;

// // let karenAdd = new numberGenerator(firstNum,secNum);
// // karenAdd.add();

// function addMath () {
//   const firstNum = parseInt(document.getElementById("firstNum").innerHTML);
//   const secNum = parseInt(document.getElementById("secNum").innerHTML);
//   var result = firstNum + secNum;
//   return result;
// }

export default function EliMathGame() {
  const myProblem = new numberGenerator(1, "+", 2, 4);
  
  //put state here

  return (
    <div 
      className="mathGame" 
      id="eliTitle"
    >
      Eli's Math Game
    <div
      id="eliMathContent"
    >
        <div
        id="equationsEli"
        >
          Equations
          <h1> {myProblem.firstNum} {myProblem.operator} {myProblem.secNum} =</h1>
      
          <input 
            type={"text"}
            pattern="[0-9]*" 
            placeholder = "Answer"
            value={myProblem.userAnswer}
            onKeyDown={addMath}
            
          />
          
          
        </div>
        <div
        id="scoringEli"
        >
          Scoring
        </div>
        <div
        id="else"
        >
          Something else
        </div>
      </div> 
   </div>
    
  );
};
