import React, { useState } from 'react'

import ImgCard from './ImgCard'
import getPhotoUrl from 'get-photo-url'
import image from '../assets/pexels2.webp'

function Gallery() {

const [allPhotos, setAllPhotos] = useState([])

const addPhoto = async()=>{
   const newPhoto = {
    id: Date.now(),
    url: await getPhotoUrl('#addPhotoInput')
   }
   setAllPhotos([...allPhotos, newPhoto])
   
  //  setAllPhotos(localStorage.setItem('Photos', JSON.stringify([...allPhotos, newPhoto])))

  
}
  
  return (
    <>
      <input type="file" name='photo' id='addPhotoInput' />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <i className="add-photo-button fa-solid fa-circle-plus"></i>
      </label>
       <ImgCard />
      <section className='gallery'>
     
      {allPhotos.map((photo)=>
        (
        <div className='item' key={photo.id}>
          <img className='item-image' src={photo.url} alt="" />

          <button className='delete-button'>Delete</button>
        </div>
      ))}  
      </section>
    </>
  )
}

export default Gallery;