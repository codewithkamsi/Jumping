import React, { useEffect, useState } from 'react'
import useWindowDimensions from './hooks/useWindowDimension';

export default function App() {
  const [moveRight, setMoveRight] = useState(200)
  const [moveRight2, setMoveRight2] = useState(200)
  const [x, setx] = useState(50)
  const [y, sety] = useState(50)
  const [jumpingup, setJumpingup] = useState(false)

  const {width, height} = useWindowDimensions()

  useEffect(()=>{
    setTimeout(() => {
      if(moveRight > width){
        setMoveRight(0) 
      }else{
        setMoveRight(moveRight + 50)
      }
    },1000) 
  },[moveRight])

  useEffect(()=>{
    setTimeout(()=>{
      if(moveRight2 > width){
        setMoveRight2(50) 
      }else{
        setMoveRight2(moveRight2 + 50)
      }
    },500) 
  },[moveRight2])

  const jump = async () =>{
    if(!jumpingup){
      setJumpingup(true)
      for(var i = 0; i<5; i++){
        await setTimeout(()=>{
          sety(y+50)
        }, 200)
      }
      for(var i = 0; i<2; i++){
        await setTimeout(()=>{
          sety(y-50)
        }, 200)
      }
      setJumpingup(false)
    }
  }
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump()
    }
  })

  

  return (
    <div className='gameboard w-full h-full bg-blue-600'>
      {moveRight}
      <div className='smallroundbox'  style={{left:`${x}px`, bottom:`${y}px`  }} ></div>
      <div className='secondsmallroundbox' style={{right:`${moveRight2}px`}}></div>
      <div className='thirdsmallroundbox' style={{right:`${moveRight}px`}}></div>
     
    </div>
  )
}
