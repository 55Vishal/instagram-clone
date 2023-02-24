import React from 'react'
import styles from './ProfileIcon.module.css'

function ProfileIcon(props) {
const {iconSize, storyBorder, image} = props;

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
  return (
    Math.floor(Math.random() * (max - min + 1)) + min
    )};

    let randomId = getRandomInt(1, 70); 
    
    let profileImage = image
    ? image : `https://i.pravatar.cc/150/?img=${randomId}`;
    
    return (
        <div className={storyBorder ? 'storyBorder' : ''}>
        <img
         className={styles.profileIcon}
          src={profileImage} storyBorder={true}
           alt="Profile" />
        </div>
    )
    

}

export default ProfileIcon