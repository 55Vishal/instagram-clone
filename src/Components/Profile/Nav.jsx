import ProfileIcon from '../Instagram homePage/ProfileIcon/ProfileIcon'
import React from 'react'
import instagramTitle from '../assets/Instagram-title.png'

function Nav() {
  return (
    <div>
      <nav>
        <button className='logo'>
          <img src={instagramTitle} alt="" />
        </button>
        <input className='search' type="text" placeholder='Search...' />
        <span className='nav-links'>
          <button>
            <i className='fas fa-home' />
          </button>
          <button>
            <i className='fas fa-comment-alt'></i>
          </button>
          <button>
            <i className='fas fa-compass'></i>
          </button>
          <button>
            <ProfileIcon />
          </button>
         
        </span>
      </nav>
    </div>

  )
}

export default Nav