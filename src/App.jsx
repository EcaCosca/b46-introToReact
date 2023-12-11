import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter"
import { set } from 'mongoose'

function App() {
  const [students, setStudents] = useState([
    {
      name: "Nestor",
      batch: 47,
      location: "Berlin"
    },
    {
      name: "Subaru",
      batch: 46,
      location: "Berlin"
    },
    {
      name: "Tania",
      batch: 46,
      location: "Berlin"
    },
    {
      name: "Bediz",
      batch: 46,
      location: "Ayvalık"
    },
    {
      name: "Alejandro",
      batch: 46,
      location: "Marburg"
    },
    {
      // name: "",
      batch: 46,
      location: ""
    }
  ])

  const [newStudent, setNewStudent] = useState({
    name: "",
    batch: 46,
    location: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    // THIS IS OBJECT DESTRUCTURING
    // const value = event.target.value
    // const name = event.target.name

    console.log(name, value);
    setNewStudent((prevStateNewStudent) => { return {...prevStateNewStudent, [name]: value}})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(newStudent);
    setStudents((prevStateStudents) => [newStudent, ...prevStateStudents])
  }

  return (
    <>
      <h1>Batch 46</h1>
      {/* <Counter student="Nestor" batch={47} location="Berlin"/>
      <Counter student="Subaru" location="Berlin"/>
      <Counter student="Tania" batch={46} location="Berlin"/>
      <Counter student="Bediz" batch={46} location="Ayvalık"/>
      <Counter/> */}

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="name" name="name"/>
        <input onChange={handleChange} type="number" placeholder="batch" name="batch"/>
        <input onChange={handleChange} type="text" placeholder="location" name="location"/>
        <button type="submit">Add Student</button>
      </form>

      {students.map(student => 
        <Counter student={student.name} batch={student.batch} location={student.location}/>
      )}
    </>
  )
}

export default App
