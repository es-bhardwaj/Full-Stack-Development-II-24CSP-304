import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('white');

  useEffect(()=> {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <button onClick={()=> setColor('red')}>RED</button>
      <button onClick={()=> setColor('blue')}>BLUE</button>
      <button onClick={()=> setColor('green')}>GREEN</button>
    </div>
  )
}

export default App