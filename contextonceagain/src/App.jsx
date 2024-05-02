import { useState } from 'react'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
 
  return (
    <UserContextProvider>
      <div style={{display:'flex',justifyContent:'space-around'}}>

      <h1>Kya haal Chaal</h1>
      <Login/>

      </div>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
