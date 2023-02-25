import './StatusBar.css'

import { Avatar } from '@mui/material'
import React from 'react'
import image from '../../assets/pexels1.webp';
import users from '../../../data/users';

function StatusBar() {
    const users = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            imageURL:"../../assets/pexels1.webp"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            imageURL:"../../assets/pexels2.webp"
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
        },
        {
            id: 6,
            name: "Mrs. Dennis Schulist",
            username: "Leopoldo_Corkery",
        },
        {
            id: 7,
            name: "Kurtis Weissnat",
            username: "Elwyn.Skiles",
        },
        {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            username: "Maxime_Nienow",
        },
        {
            id: 9,
            name: "Glenna Reichert",
            username: "Delphine",
        },
        {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
        },
        {
            id: 11,
            name: "Donald Duck",
            username: "donald.duck",
        },
        {
            id: 12,
            name: "Adam Savage",
            username: "adam.is.savage",
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
                    users.map((item)=>(
                        <div className='status'>
                        <Avatar className='statusBar_status' src={image}  />
                        <div className='statusBar_text'>
                        {item.username+'...'}
                        </div>
                
                        </div>
                    ))
                 }
                
            </div>
        </div>


    )
}

export default StatusBar