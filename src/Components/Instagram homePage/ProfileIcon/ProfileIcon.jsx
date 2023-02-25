import React from 'react'
import styles from './ProfileIcon.module.css'
import { useNavigate } from "react-router-dom";

function ProfileIcon(props) {
  const { iconSize, storyBorder, image } = props;
  const nevigate = useNavigate();
 
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  let profileImage = image? image:`https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
      onClick={()=> nevigate("/Profile") }
      style={{borderRadius: "111px",
        width: '44px',
        height: '44px',
    }}
        className={`styles.profileIcon ${iconSize}`}
        src={profileImage}
        alt="profile"
      />
    </div>
    )
    

}

export default ProfileIcon