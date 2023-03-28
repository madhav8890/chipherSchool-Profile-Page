import React from 'react'
import Navbar from '../components/Navbar'
import FollowerCard from '../components/FollowerCard'
import UpperNav from '../components/UpperNav'


const Follower = () => {
  return (
    <div>
              <UpperNav/>

        <h3 style={{marginLeft:'25px' , marginTop:'20px', fontSize:'50px' , fontWeight:'700'}}>User Follow You</h3>
        <FollowerCard/>
    </div>
  )
}

export default Follower