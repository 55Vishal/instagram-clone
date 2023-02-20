import React, { useState } from 'react'

function Bio() {
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [userDetail, setUserDetail] = useState({
        name:'Vishal Malusare',
        about:'Creating application - Feel free to code with us...'
    }) 
    function updateUser (e){
        e.preventDefault()
        setUserDetail({
            name:e.target.name.value,
            about:e.target.about.value   
        })
        setEditFormIsOpen(<false></false>)   
    } 
const editForm=(
    <form className='edit-bio-form' onSubmit={updateUser}>
    <input type="text" id='' name='name' placeholder='Your name' />
    <input type="text" id='' name='about' placeholder='About name' />
    <br />
    <button className='cancel-save' type='submit '>Save</button>
    <button className='cancel-button' type='button' onClick={()=> setEditFormIsOpen(false)}>Cancel</button>
    </form>
)
    

    
  return (
    <section className='bio'>
    <div className='profile-photo' role='button' title='Click to edit photo'>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="profile" />
    </div>
    <div className='profile-info'>
    <p className='name'>{userDetail.name}</p>
    <p className='about'>{userDetail.about}</p>
    {editFormIsOpen ? editForm : <button onClick={() => setEditFormIsOpen(true)} >Edit</button>
}  
    </div>
    </section>
  )
}

export default Bio;
