import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Heatmap from './Heatmap'
import Socialmedia from './Socialmedia'
import ProfacinalDetail from './ProfacinalDetail'
import Password from './Password'
import Intrest from './Intrest'

const MainLayout = () => {
  return (
    <div bg>
        <Navbar/>
        <About/>
        <Heatmap/>
        <Socialmedia/>
        <ProfacinalDetail/>
        <Password/>
        <Intrest/>
    </div>
  )
}

export default MainLayout