import React from 'react'
import Navbar from './components/Home/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../public/pages/Home/Home'
import SignIn from '../public/pages/Auth/SignIn'
import SignUp from '../public/pages/Auth/SignUp'

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