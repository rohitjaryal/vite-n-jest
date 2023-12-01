import {useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Vite n Jest</h1>
        <p>{count}</p>
        <button onClick={()=>setCount((value)=>value+1)}>Add Count</button>
    </>
  )
}

export default App
