import React, { useState } from 'react'

import { BiArrowBack } from 'react-icons/bi';
import getPhotoUrl from 'get-photo-url'
import profileIcon from '../assets/profileIcon.jpg'
import { useNavigate } from "react-router-dom";

function Bio() {
    const nevigate = useNavigate();


    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [profilePhoto, setprofilePhoto] = useState(profileIcon)


    const [userDetail, setUserDetail] = useState({
        name: 'Vishal Malusare',
        about: 'Creating application - Feel free to code with us...'
    })
    function updateUser(e) {
        e.preventDefault()
        setUserDetail({
            name: e.target.name.value,
            about: e.target.about.value
        })
        setEditFormIsOpen(false)
    }

    const updateProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setprofilePhoto(newProfilePhoto)

    }

    const editForm = (
        <form className='edit-bio-form' onSubmit={updateUser}>
            <input type="text" id='' name='name' placeholder='Your name' />
            <input type="text" id='' name='about' placeholder='About name' />
            <br />
            <button className='cancel-save' type='submit '>Save</button>
            <button className='cancel-button' type='button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
        </form>
    )

    return (
        <>
            <BiArrowBack onClick={() => nevigate("/")} className='back-logo' />
            <section className='bio'>
                <input type="file" accept='images/*' name='photo' id='profilePhotoInput' />
                <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                    <div className='profile-photo' role='button' title='Click to edit photo'>
                        <img src={profilePhoto} alt="profile" />
                    </div>
                </label>
                <div className='profile-info'>
                    <p className='name'>{userDetail.name}</p>
                    <p className='about'>{userDetail.about}</p>
                    {editFormIsOpen ? editForm : <button onClick={() => setEditFormIsOpen(true)} >Edit</button>
                    }
                </div>
            </section>
        </>
    )
}

export default Bio;
