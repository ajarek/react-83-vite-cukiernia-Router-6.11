import { useState,useRef } from 'react';


import './Counter.css'
const Counter = ({}) => {
  


const [count,setCount]=useState(0)
  const handleIncrement = () => {
     setCount(count+1) 
     
    };
  const handleDecrement = () => {
    setCount(count-1) 
  };
   
  return (
    <div>
      <button onClick={handleIncrement}>➕</button>
      <span className='span' >{count}</span>
      <button onClick={handleDecrement}>➖</button>
    </div>
  );
  
}

export default Counter
