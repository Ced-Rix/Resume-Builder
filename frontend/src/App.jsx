import React from 'react'
import Navbar from './components/Home/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  )
}
export default App