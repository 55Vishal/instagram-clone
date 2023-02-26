import './Cards.css'

import Post from '../Posts/Post'
import React from 'react'

function Cards(props) {
  return (
    <div>
      <Post id='1' postImage="https://loremflickr.com/1234/2345/animals" likes='4232' commit='513' />
      <Post id='2' postImage="https://source.unsplash.com/1600x900/?portrait" likes='8367' commit='79' />
      <Post id='3' postImage="https://loremflickr.com/1234/2345/city" likes='5463' commit='231' />
      <Post id='4' postImage='https://loremflickr.com/1234/2345/fashion' likes='3241' commit='523' />
      <Post id='5' postImage="https://loremflickr.com/640/480/abstract" likes='6543' commit='146' />

    </div>
  )
}

export default Cards