import { useState,useRef } from 'react';


import './Counter.css'
const Counter = ({id,refen}) => {
  


const [count,setCount]=useState(1)
  const handleIncrement = () => {
     setCount(count+1) 
     
    };
  const handleDecrement = () => {
    setCount(count-1) 
  };
   
  return (
    <div>
      <button onClick={handleIncrement}>➕</button>
      <span id={id} ref={refen}>{count}</span>
      <button onClick={handleDecrement}>➖</button>
    </div>
  );
  
}

export default Counter
