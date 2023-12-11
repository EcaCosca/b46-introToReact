import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () => setCount((prevCount) => prevCount + 1)
  
    const handleReset = () => setCount(0)
    
    const handleSubstract = () => setCount((prevCount) => prevCount - 1)

  return (
    <div>
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