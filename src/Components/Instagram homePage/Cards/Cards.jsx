import './Cards.css'

import Post from '../Posts/Post'
import React from 'react'

function Cards(props) {
  return (
    <div>
    <Post id='1' postImage="https://source.unsplash.com/random/800x800/?img=1" likes='4232' />
    <Post id='2' postImage="https://source.unsplash.com/1600x900/?portrait" likes='8367'/>
    <Post id='3'  postImage="https://picsum.photos/200/300" likes='5463'/>
    <Post id='4' postImage='https://i.pravatar.cc/150?img=1' likes='3241'/>
    <Post id='5' postImage="https://picsum.photos/200/300" likes='6543'/>

    </div>
  )
}

export default Cards