import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/cards'
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <h1 className='text-black bg-yellow-400 p-10 rounded-xl mb-4'>Himanshu</h1>  
    <Card name="Himanshu" fttext="Kya chl rha"/>
    <Card name="Adhikari" />

    </>
  )
}

export default App
