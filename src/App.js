import { useEffect, useState } from 'react';
import './App.css';
import Die from "./Die"
import Footer from "./footer"
import { nanoid } from 'nanoid';
import Confetti from "react-confetti"



function App() {
  const[dice, setDice] = useState(allNewDice())
  const[tenzies, setTenzies] = useState(false)
  const[score, setScore] = useState(120)
  const[text, setText] = useState("Let's Play!")
  

  const highScore = localStorage.getItem("highScore");
 
  

  useEffect(()=>{
    const allHeld = dice.every(die=> die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue){
      setText("Congratulations!")
      const newScore = score
      if (newScore > highScore) {
        localStorage.setItem("highScore", newScore);
      }

      setTenzies(true)
     
    }
  }, [dice])
  


 
  useEffect(()=>{
    if(score===0){
      startAgain("You Lose! try Again..")
      
    }
  },[dice])


  function generateNewDie(){
    return {
        value: Math.floor(Math.random() * 6 + 1),
        isHeld:false,
        id:nanoid()
    }
  }

  function allNewDice(){
    const randomArray = []
    for (let i=0; i<= 9; i++){  
      randomArray.push(generateNewDie())                  
    }
    return randomArray
  }
   

  function rollDice(info){
    setScore(prevScore =>  prevScore-5)
    setText(prevText=> "Keep Rolling...")
    setDice(oldDice => (oldDice.map(die=>{
      return die.isHeld ?
      die: 
      generateNewDie()
    })))
  }

   
  function holdDice(id){
    setDice(oldDice=> oldDice.map(die =>{
      return die.id === id ?
       { ...die, isHeld: !die.isHeld} : 
       die
    }))
  }

  function startAgain(info){
    setScore(prevScore=> 100) 
    setDice(allNewDice())
    setTenzies(false)
    setText(prevText=> info)
  }
  
  
  
  const diceElements = dice.map(die => <Die value={die.value} id={die.id} key={die.id} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/> )
  
  return (
  
      
    
    <div className="App w-screen h-fit flex bg-bodyCover flex-col items-center justify-center  "> 
    {tenzies && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
      <div className='flex flex-col items-center space-y-5 mt-10 w-screen h-screen'>
      <h3 className='text-blue-700 bg-gradient-to-r from-blue-400 to-orange-400 px-6 py-2 rounded-2xl font-nunito font-semibold animate-pulse  '>{text}</h3>
     <div className='flex flex-row space-x-4'>
         
          <h2 className='text-white bg-teal-600  px-6 py-3 rounded-2xl font-nunito font-bold'>Highest Score:- {highScore}</h2>
          
          
      </div>
      <h2 className=' text-slate-800 font-nunito text-lg font-bold bg-gradient-to-r from-red-200 to-red-800  px-6 py-2 rounded-full'>Score:- {score} </h2>
      <div className=" bg-slate-500 shadow-2xl border rounded-xl w-96 h-96 sm:w-fit sm:h-fit sm:mx-6   flex flex-col items-center py-10 px-4 space-y-4">
          <h1 className="text-3xl font-nunito font-bold ">Tenzies </h1> 
          <p className="font-nunito text-md font-semibold">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>  
          <div className='flex flex-wrap justify-center font-nunito cursor-pointer'>
            {diceElements}
         </div>
          <div className='flex space-x-4'>
          <button onClick={tenzies ?  () => startAgain(" Let's Start Again!"): () => rollDice(" Let's Start Again!")} className="bg-slate-900 px-8 text-white font-nunito font-bold rounded-lg  hover:bg-slate-800 shadow-2xl  py-2">{tenzies ? "New Game" : "Roll"}</button>
          {!tenzies && <button onClick={() => startAgain(" Let's Start Again!")} className=' hover:animate-spin'><img src="./icons/restart.png" className='w-8' alt="" /></button>}
          
          </div>
        </div>
      </div>
     
     
      <Footer/>
      
    </div>
   
  );
}

export default App;
