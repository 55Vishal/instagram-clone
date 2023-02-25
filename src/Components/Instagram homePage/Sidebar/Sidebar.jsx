import './Sidebar.css'

import Profile from '../Profile/Profile'
import React from 'react'
import Sticky from 'react-sticky-el'
import Suggestions from '../Suggestions/Suggestions'
import image from '../../assets/pexels1.webp'

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="Vishal Malusare"
          caption="@vishal"
          urlText="Switch"
          image={image}
        />
        <br />
        <Suggestions />
      </div>
    </Sticky>
  )
}

export default Sidebar