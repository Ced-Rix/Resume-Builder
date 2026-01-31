import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'

import Home from './pages/Home/Home'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'

function App() {
  useLenis()
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
