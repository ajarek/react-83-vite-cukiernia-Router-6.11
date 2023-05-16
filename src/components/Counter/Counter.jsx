import { useState } from 'react'
import './Counter.css'

const Counter = ({}) => {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(count)
  }
  const handleDecrement = () => {
    setCount(count)
  }

  return (
    <div className='counter'>
      <button onClick={handleIncrement}>➕</button>
      <span className='span'>{count}</span>
      <button onClick={handleDecrement}>➖</button>
    </div>
  )
}

export default Counter
