import React from 'react'
import Navbar from '../../components/Home/Navbar'
import Hero from '../../components/Home/Hero'
import About from '../../components/Home/About'
import Demo from '../../components/Home/Demo'
import SplitPane from '../../components/Home/SplitPane'

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