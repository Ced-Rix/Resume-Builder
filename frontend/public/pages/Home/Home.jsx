import React from 'react'
import Navbar from '../../../src/components/Home/Navbar'
import Hero from '../../../src/components/Home/Hero'
import About from '../../../src/components/Home/About'
import Demo from '../../../src/components/Home/Demo'
import SplitPane from '../../../src/components/Home/SplitPane'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Demo />
        <About />
        <SplitPane />
    </div>
  )
}

export default Home