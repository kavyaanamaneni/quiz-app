import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context';

const MainMenu = () => {
  let{setGameState}=useContext(QuizContext);
  return (
    <div className='Mainmenu'>
      <button onClick={()=>{setGameState("quiz")}}>start-quiz</button>
      
    </div>
  )
}

export default MainMenu;
