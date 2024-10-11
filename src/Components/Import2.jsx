import React from 'react'

export default function Import2({count, onHandleClick}) {

  const handleClick =()=> onHandleClick()

  return (
    <div>
        <h1>value component</h1>
        <p>count:{count}</p>
        <button onClick={handleClick}>click to count</button>
    </div>
  )
}
