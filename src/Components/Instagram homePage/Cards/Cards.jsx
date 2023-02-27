import './Cards.css'

import Post from '../Posts/Post'
import React from 'react'

function Cards() {
  return (
    <div>
      <Post id='1' postImage="https://loremflickr.com/1234/2345/animals" likes='4232' commit='513' />
      <Post id='2' postImage="https://i.pravatar.cc/400" likes='8367' commit='179' />
      <Post id='3' postImage="https://loremflickr.com/1234/2345/city" likes='5463' commit='231' />
      <Post id='4' postImage='https://loremflickr.com/1234/2345/fashion' likes='3241' commit='123' />
      <Post id='2' postImage="https://i.pravatar.cc/300" likes='8367' commit='91' />
      <Post id='5' postImage="https://loremflickr.com/640/480/abstract" likes='6543' commit='386' />
      <Post id='5' postImage="https://loremflickr.com/640/380/abstract" likes='2754' commit='146' />
      <Post id='5' postImage="https://loremflickr.com/640/480" likes='543' commit='186' />
      <Post id='2' postImage="https://i.pravatar.cc/100" likes='8367' commit='57' />
      <Post id='5' postImage="https://i.pravatar.cc/150" likes='664' commit='132' />

    </div>
  )
}

export default Cards