import React from 'react'
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App