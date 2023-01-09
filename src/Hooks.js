import React, {useState}from 'react'

function Hooks() {

  const[count,setCount]= useState(0);

  return (
    <div>
      <h1>You are {count} times click in button</h1>
      <button onClick={()=> setCount(count+1)}>
click me
</button>
</div>
  )
}

export default Hooks
