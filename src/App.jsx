import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter"

function App() {
  return (
    <>
      <h1>Batch 46</h1>
      <Counter student="Nestor" batch={47} location="Berlin"/>
      <Counter student="Subaru" location="Berlin"/>
      <Counter student="Tania" batch={46} location="Berlin"/>
      <Counter student="Bediz" batch={46} location="Turkey"/>
      <Counter/>
    </>
  )
}

export default App
