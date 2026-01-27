import React from 'react'
import Navbar from './components/Navbar'
import Hero from '../public/pages/Hero'
import Demo from '../public/pages/Demo'
import Landing from '../public/pages/About'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Demo />
      <Landing />
    </div>
  )
}
export default App