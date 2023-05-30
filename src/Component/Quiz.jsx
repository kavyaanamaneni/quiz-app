import React, { useContext, useState } from 'react'
import { QuestionBank } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Context';

const Quiz = () => {
  let{score,setScore,setGameState}=useContext(QuizContext);
  let[currentQuestion,setCurrentQuestion]=useState(0);
  let[optionChoosen,setOptionChoosen]=useState("");
  let handleNext=()=>{
    if(QuestionBank[currentQuestion].Answer===optionChoosen){
      setScore(score+1);
    }
    setCurrentQuestion(currentQuestion+1);
  }
  let handleFinish=()=>{
    if(QuestionBank[currentQuestion].Answer===optionChoosen){
      setScore(score+1);

    }
    setGameState("endScreen")
  }

  return (
    <div className='quiz'>
      <h1>{QuestionBank[currentQuestion].prompt}</h1>
       <div className='options'>
      <button onClick={()=>{setOptionChoosen("A")}}>{QuestionBank[currentQuestion].optionA}</button>
      <button onClick={()=>{setOptionChoosen("B")}}>{QuestionBank[currentQuestion].optionB}</button>
      <button onClick={()=>{setOptionChoosen("C")}}>{QuestionBank[currentQuestion].optionC}</button>
      <button onClick={()=>{setOptionChoosen("D")}}>{QuestionBank[currentQuestion].optionD}</button>
      </div>
      <div>
        {currentQuestion===QuestionBank.length-1?
        (<button onClick={handleFinish}>finish-quiz</button>):
       ( <button onClick={handleNext}>next-question</button>)}
       </div>
    </div>
  )
}

export default Quiz;
