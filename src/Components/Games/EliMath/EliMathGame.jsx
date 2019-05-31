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
      const answerStatment = `Yes ${initialNum}+ ${followNum} = ${resultsUser}`
      //var rightAnswer = setUserAnswer(answerStatment);
      setUserAnswer(answerStatment);
      // newArray.push(rightAnswer);
      // alert(newArray[0]);
      alert(answerStatment);
      
      return answerStatment;
    } else {
      alert(`nope not yet, try again please `);
    }
  }

  

  return (
    <div 
      className="mathGame" 
      id="eliTitle"
    >
      <div 
        id="eliMainTitle"
      >
      Eli's Math Game
      </div>
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
              value={"submit"}
              onClick={setMyNumber}
            />
          </div>
          <div
            id="scoringEli"
            value={userAnswer}
          >
            Scoring
            <input
              type={"button"}
              value={userAnswer}
            />
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
