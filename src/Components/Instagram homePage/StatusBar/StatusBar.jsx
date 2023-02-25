import './StatusBar.css'

import ProfileIcon from '../ProfileIcon/ProfileIcon';
import React from 'react'

// import image from '../../assets/pexels1.webp';

function StatusBar() {


    const users = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret...",
            imageURL: "../../assets/pexels1.webp"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Anton...",
            imageURL: "../../assets/pexels2.webp"
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Saman...",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karia...",
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamre...",
        },
        {
            id: 6,
            name: "Mrs. Dennis Schulist",
            username: "Leopo...",
        },
        {
            id: 7,
            name: "Kurtis Weissnat",
            username: "Elwyn...",
        },
        {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            username: "Maxime...",
        },
        {
            id: 9,
            name: "Glenna Reichert",
            username: "Delphi...",
        },
        {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moria...",
        },
        {
            id: 11,
            name: "Donald Duck",
            username: "donal...",
        },
        {
            id: 12,
            name: "Adam Savage",
            username: "adam...",
        },
    ]
    return (
        <div>

            <div className='statusBar__container'>
                {/*  <div className='status'>
                <Avatar className='statusBar_status' src={image} />
                <div className='statusBar_text'>Arjun_Shinde</div>
                 </div>*/}

                {
                    users.map((item) => (
                        <div className='status'>
                            <ProfileIcon />
                            <div style={{ color: 'black' }}>
                                {item.username}
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>


    )
}

export default StatusBar