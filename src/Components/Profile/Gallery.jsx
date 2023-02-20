import React from 'react'
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
  return (
    <>
    <input type="file" name='photo' id='addPhotoInput'/>
    <label htmlFor="addPhotoInput">
    <i className="add-photo-button fa-solid fa-circle-plus"></i>
    </label>
    <section className='gallery'>
    <div className='item'>
    <img className='item-image' src={pexels1} alt="" />
    </div>
    <div className='item'>
    <img className='item-image' src={pexels2} alt="" />
    </div>
    <div className='item'>
    <img className='item-image' src={pexels3} alt="" />
    </div>  <div className='item'>
    <img className='item-image' src={pexels4} alt="" />
    </div>  <div className='item'>
    <img className='item-image' src={pexels5} alt="" />
    </div>  <div className='item'>
    <img className='item-image' src={pexels6} alt="" />
    </div>  
    <div className='item'>
    <img className='item-image' src={pexels7} alt="" />
    </div>  
    <div className='item'>
    <img className='item-image' src={pexels8} alt="" />
    </div> 
     <div className='item'>
    <img className='item-image' src={pexels9} alt="" />
    </div> 

    </section>
    </>
  )
}

export default Gallery