import './Post.css'

import { AiOutlineHeart } from 'react-icons/ai';
import { BiNavigation } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';
import { FaRegBookmark } from 'react-icons/fa';
import Profile from '../Profile/Profile'
import React from 'react'

function Post(props) {
    return (
        <div className='post_container'>
            <div className='post_header'>

                <Profile caption='Hey there!!'  />
            </div>

            <div>
                <img src={props.postImage} width='615px' />
            </div>

            <div>
            <div className='post_icons'>
                <div className='post_icons1'>
                    <AiOutlineHeart className='AiOutlineHeart' />
                    <BsChat className='BsChat' />
                    <BiNavigation className='BiNavigation' />
                </div>
                <div className='post_icons2'>
                    <FaRegBookmark />
                </div>
            </div>
            <div style={{color:'black', marginLeft:'0.7vw',fontWeight:'bold',marginTop:'1vh'}}>
            {props.likes} Likes
            </div>  
            </div>

            <div className='post_comment'>
             <div className='post_comment1'>Hello</div>
             <div className='post_comment1'>Hello</div>
             <div className='post_comment1'>Hello</div>
             <div className='post_comment1'>Hello</div>
             <input className='post_input' placeholder='Add a comment...' />
            </div>

        </div>
    )
}

export default Post