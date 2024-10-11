import React from 'react'
import Styles from './App.module.css'

import './App.css'

const flag =true

// first condition

function App({name, age, course}) {
  function getInfo(love){
    return love ?
    <p className={Styles.infoTrue}>{name} is {age} years old studing {course}.</p>
    : <h1 className={Styles.errorMessage}>try again!</h1>
  }
 
  return (
    <>
  <h1 className={flag ? Styles.titleTrue : Styles.titleFalse}>Bread of life</h1>
 

  {getInfo(flag)}
    </>
  )
}
export default App





 {/* second condition */}

  
  {/* {flag ?
  <p>{name} is {age} years old studing {course}.</p>
  : <h1>try again!</h1>
  }  */}