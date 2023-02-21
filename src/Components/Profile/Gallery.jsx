import React, { useState } from 'react'

import getPhotoUrl from 'get-photo-url'
import pexels1 from '../assets/pexels1.webp'
import pexels2 from '../assets/pexels2.webp'
import pexels3 from '../assets/pexels3.jpeg'
import pexels4 from '../assets/pexels4.jpeg'
import pexels5 from '../assets/pexels5.jpeg'
import pexels6 from '../assets/pexels6.jpeg'
import pexels7 from '../assets/pexels7.jpeg'
import pexels8 from '../assets/pexels8.jpeg'
import pexels9 from '../assets/pexels9.webp'

function Gallery() {

const [allPhotos, setAllPhotos] = useState([])

const addPhoto = async()=>{
   const newPhoto = {
    id: Date.now(),
    url: await getPhotoUrl('#addPhotoInput')
   }
   setAllPhotos([...allPhotos, newPhoto])
}
  
  return (
    <>
      <input type="file" name='photo' id='addPhotoInput' />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <i className="add-photo-button fa-solid fa-circle-plus"></i>
      </label>
      <section className='gallery'>
      {allPhotos.map((photo)=>(

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