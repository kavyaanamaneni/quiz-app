import React ,{useContext}from 'react'
import { QuizContext } from '../Helpers/Context';
import { QuestionBank } from '../Helpers/QuestionBank';
const EndScreen = () => {
  let{score,setGameState,setScore}=useContext(QuizContext);
  let reStart=()=>{
    setScore(0);
    setGameState("menu")
  }
  return (
    <div className='endScreen'>
      <h1>thanks for playing</h1>
      <h1>{score}/{QuestionBank.length}</h1>
      <button onClick={reStart}>reStart</button>
    </div>
  )
}

export default EndScreen;
