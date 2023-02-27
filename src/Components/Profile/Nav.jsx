import ProfileIcon from '../Instagram homePage/ProfileIcon/ProfileIcon'
import React from 'react'
import image from '../assets/pexels1.webp';
import instagramTitle from '../assets/Instagram-title.png'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <button className='logo'>
          <img src={instagramTitle} alt="" />
        </button>
        <input className='search' type="text" placeholder='Search...' />
        <span className='nav-links'>
          <button>
            <i className='fas fa-home' onClick={() => navigate('/')} />
          </button>
          <button>
            <i className='fas fa-comment-alt'></i>
          </button>
          <button>
            <i className='fas fa-compass'></i>
          </button>
          <button>
            <ProfileIcon image={image} storyBorder={true} />
          </button>

        </span>
      </nav>
    </div>

  )
}

export default Nav