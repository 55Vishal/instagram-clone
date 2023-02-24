import './Story.css'

import ProfileIcon from '../ProfileIcon/ProfileIcon'
import React from 'react'
import users from '../../../data/users'

function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if(accountName.length > 10){
    accountName = accountName.substring(0, 10)+ '...';
  }

  return (
    <>
    <div className='story'>
    <ProfileIcon />
    <span className='accountName'> {accountName} </span>
    </div>
  </>
  )
}

export default Story