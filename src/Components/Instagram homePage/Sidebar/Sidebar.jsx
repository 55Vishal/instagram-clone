import './Sidebar.css'

import Footer from '../Footer/Footer'
import Profile from '../Profile/Profile'
import React from 'react'
import Suggestions from '../Suggestions/Suggestions'
import image from '../../assets/pexels1.webp'

function Sidebar() {
  return (
  
      <div className="sidebar">
        <Profile
          username="Vishal Malusare"
          caption="@vishal"
          urlText="Switch"
          image={image}
        />
        <br />
        <Suggestions />
        <Footer />
      </div>
    
  )
}

export default Sidebar