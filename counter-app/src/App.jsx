import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const addBtn = () => {
    setCount(count+1);
  }
  const remBtn = () => {
    setCount(count-1);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <h2>Count Value: {count}</h2>
      <div className="button-group">
        <button onClick={addBtn}>ADD</button>
        <button onClick={remBtn}>REMOVE</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  )
}

export default App
