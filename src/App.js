import React from 'react'
import { useState } from 'react';
import { QuizContext } from './Helpers/Context';
import MainMenu from './Component/MainMenu';
import Quiz from './Component/Quiz';
import EndScreen from './Component/EndScreen';
import "./App.css"

const App = () => {
  let[gameState,setGameState]=useState("menu");
  let[score,setScore]=useState(0);
  return (
    <div className='App'>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState==="menu"&&<MainMenu/>}
        {gameState==="quiz"&&<Quiz/>}
        {gameState==="endScreen"&&<EndScreen/>}
      </QuizContext.Provider>
    </div>
  )
}

export default App;
