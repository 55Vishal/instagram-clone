import './Post.css'

import React, { useState } from 'react'

import { BiNavigation } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaRegBookmark } from 'react-icons/fa';
import Profile from '../Profile/Profile'

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Post(props) {
    const [color, setColor] = useState(false)

    function handleLike() {
        setColor(!color)
    }


    return (
        <div className='post_container'>
            <div className='post_header'>

                <Profile caption='@Hey_there!!' />
            </div>

            <div>
                <img src={props.postImage} alt='Post' width='615px' />
            </div>

            <div>
                <div className='post_icons'>
                    <div className='post_icons1'>
                        <BsFillSuitHeartFill onClick={handleLike} className='AiOutlineHeart'
                            style={{ color: color ? 'red' : '' }}
                        />
                        <BsChat className='BsChat' />
                        <BiNavigation className='BiNavigation' />
                    </div>
                    <div className='post_icons2'>
                        <FaRegBookmark />
                    </div>
                </div>
                <div style={{ color: 'black', marginLeft: '0.7vw', fontWeight: 'bold', marginTop: '1vh' }}>
                    {props.likes} Likes
                </div>
            </div>

            <div className='post_comment'>
                <div style={{ color: 'black' }} className='post_comment1'>
                    global_winnipeg A viewer sent in this photo of a frozen bubble they made during the recent stint of colder weather! #YourManitoba...</div>
                <div style={{ color: 'black' }} className='post_comment1'>View all {props.commit} comment</div>
                <input className='post_input' placeholder='Add a comment...' />
            </div>

        </div>
    )
}

export default Post