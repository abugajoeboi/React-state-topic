import React, { useState } from 'react'
import Import2 from './Import2'
import Import3 from './Import3'

export default function Import1() {
  const [count, setCount]=useState(0);
  return (
    <div>
      
        <Import2 count={count} onHandleClick={()=> setCount(count + 1)}/>
        <Import3 count = {count} handleClick={() => setCount(count + 1)}/>

    </div>
  )
}
