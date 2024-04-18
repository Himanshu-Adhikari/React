import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const inc = () => {
    if(count<20)setCount(count + 1); 
  };
  
  const dec = () => {
    if(count){setCount(count - 1);} 
  };

  return (
    <>
      <h1>Ginti krte hai</h1>
      <h2>Counter: {count}</h2>
      <button onClick={inc}>Badao</button>
      <br/>
      <button onClick={dec}>Ghatao</button>
      <footer>Countue kitni chl rhi hai {count}</footer>
    </>
  );
}

export default App;
