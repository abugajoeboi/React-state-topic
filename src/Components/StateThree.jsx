import React, { useState } from 'react'

export default function StateThree() {
    const [pharse, setPharse]=useState(()=>{
        const initialValue = 20;

        return initialValue
    })
  return (
    <div>
        
        <h1>count: {pharse}</h1>
        <button onClick={()=> setPharse(pharse + 1)}>increament</button>
    </div>
  )
}
