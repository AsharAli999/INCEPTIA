import React from 'react'
import Sidebar from './components/Sidebar'
import MemoryGame from './Games/MemoryGame'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Profile from './components/Profile';

const App = () => {
  return (
       <BrowserRouter>
      <Routes>
   
  
    
      <Route path="/" element={<Sidebar/>} />
      <Route path="/memorygame" element={<MemoryGame/>} />
      <Route path="/profile" element={<Profile/>} />
   
    </Routes>
    </BrowserRouter>
  )
}

export default App