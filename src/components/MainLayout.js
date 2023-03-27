import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Heatmap from './Heatmap'
import Socialmedia from './Socialmedia'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Heatmap/>
        <Socialmedia/>
    </div>
  )
}

export default MainLayout