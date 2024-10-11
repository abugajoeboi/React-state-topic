import React from 'react'

export default function Import3({count, handleClick}) {

  const click =()=> handleClick();
  return (
    <div>
        <h1>code in progress</h1>
        <p>count:{count}</p>
        <button onClick={click}>increament</button>
    </div>
  )
}
