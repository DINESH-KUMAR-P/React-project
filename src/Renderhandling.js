
import React from 'react'

export default function Renderhandling(props) {
   const EventClick = ()=>{
        console.log("RenderHandling");
    }
    const clickEvent = () =>{
        console.log("Anotheronce");
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color:'red'}}>RenderHandling in function</h1>

      <button onClick={EventClick}>Click</button>
      <button onClick={clickEvent}>Another</button>
    </div>
  )
}
