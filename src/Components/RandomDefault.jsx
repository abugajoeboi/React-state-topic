import React, { useState } from 'react'

export default function RandomDefault() {
  const [ random, setRandom]=useState(()=>(Math.floor(Math.random()*7)))
  return (
    <div>
      <h1>{random}</h1>
      <button onClick={()=> setRandom(Math.floor(Math.random() * 10))}>generate a random number</button>
    
    </div>
  )
}
