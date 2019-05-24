import React, { useState } from "react";



// function randomNum(){
//   Math.floor((Math.random()*10)+1);
// }

// class numberGenerator {
//   const (firstNum, operator, secNum, userAnswer){
//     this.firstNum = firstNum;
//     this.operator = operator;
//     this.secNum = secNum;
//     this.userAnswer = userAnswer;
//   }

  
  
//   add() {
//     const firstNum = randomNum();
//     const secNum = randomNum();
//     console.log({firstNum, secNum})
//     const result = this.firstNum + this.secondNum;
//     return result;
//   }

//   subtract() {
//     if (this.firstNum > this.secondNum){
//       return this.firstNum - this.secondNum;
//     } else
//     return this.secondNum - this.firstNum;
//   }

// }



export default function EliMathGame() {
  const [userAnswer, setUserAnswer] = useState(0);
  const newArray = [];
  

  const initialNum = Math.floor((Math.random()*10)+1);
  const followNum = Math.floor((Math.random()*10)+1);
  //var myProblem = new numberGenerator(initialNum, "+", followNum, 4);
  
  function setMyNumber() {
    var resultsUser = document.getElementById("inputAnswer").value;
    var trueResult = initialNum + followNum;
    if (resultsUser == trueResult) {
      alert("Yay, great job!");
      var answerStatment = `Yes ${initialNum}+ ${followNum} = ${resultsUser}`
      var rightAnswer = setUserAnswer(answerStatment);
      newArray.push(rightAnswer);
      alert(newArray[0]);
      return answerStatment;
    } else {
      alert("nope not yet, try again please");
    }
  }

  

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
          <h1> {initialNum} + {followNum} =</h1>
      
          <input 
            type={"text"}
            placeholder = "Answer"
            id="inputAnswer"
            
            
          />
          <input 
            type={"button"}
            className="submitButton"
            value={userAnswer}
            onClick={setMyNumber}
          />
        </div>
        <div
          id="scoringEli"
          value={userAnswer}
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
