import React, { useState } from 'react'

export default function state() {
    const [state, setState]=useState(
      {
        name:'joe',
        age: '29',
        course: 'java',
        fee: 200,
    })

    const [student, setStudent]=useState([
      {
        id:1,
        name:'john',
        age: '20',
        course: 'javascript',
        fee: 100,
    },
      {
        id:2,
        name:'nicolas',
        age: '10',
        course: 'css',
        fee: 150,
    },
      {
        id:3,
        name:'chris',
        age: '20',
        course: 'Django',
        fee: 250,
    },
  ])

    function changeAge(){
      // const copyInfo ={
      //   ...state, age: 16
      // }
      // setState(copyInfo);

      setState({
        
        ...state, course: 'python', fee: 500, age: 16

      })
      
    }
     
    function changeCourse(){
      setStudent(
        student.map((student)=> student.id === 2 ? { ...student, course: 'express-js'} : student)
      )
    }
   
  return (
    <div>



      <ul>
        <li>Name:{state.name}</li>
        <li>Age:{state.age}</li>
        <li>Course:{state.course}</li>
        <li>fee:{state.fee}</li>
      </ul>
      <button onClick={changeAge}>change Age</button>


      {student.map((students)=>(
      <ul key={Math.random()}>
      <li>{students.name}</li>
      <li>{students.age}</li>
      <li>{students.course}</li>
      <li>{students.fee}</li>
      </ul>
    ))}

    <button onClick={changeCourse}>change course</button>


    </div>
  )
}
