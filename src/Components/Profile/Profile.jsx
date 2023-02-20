import Bio from './Bio'
import Gallery from './Gallery';
import Nav from './Nav'
import React from 'react'

function Profile() {
    return (
        <>
            <Nav />
            <div className='container'>
                <Bio />
                <Gallery />
            </div>
        </>
    )
}

export default Profile;



