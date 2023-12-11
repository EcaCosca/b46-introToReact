import React, {useState} from 'react'
import Location from './Location'

const Counter = ({student = "student", batch = 46, location = "unknown"}) => {
    const [count, setCount] = useState(0)

    const handleAdd = () => setCount((prevCount) => prevCount + 1)
  
    const handleReset = () => setCount(0)
    
    const handleSubstract = () => setCount((prevCount) => prevCount - 1)

  return (
    <div>
        <h2>Counter of {student} from batch {batch}</h2>
        <Location location={location}/>
        <h3>Count is {count}</h3>
        <div className="card">
            <button onClick={handleAdd}>
            Add 1
            </button>
            <button onClick={handleReset}>
            Reset
            </button>
            <button onClick={handleSubstract}>
            Substract 1
            </button>
        </div>
    </div>
  )
}

export default Counter