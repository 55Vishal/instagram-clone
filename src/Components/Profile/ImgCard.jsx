import React from 'react'
import image1 from '../assets/pexels1.webp'
import image2 from '../assets/pexels2.webp'
import image3 from '../assets/pexels3.jpeg'
import image4 from '../assets/pexels4.jpeg'
import image5 from '../assets/pexels5.jpeg'
import image6 from '../assets/pexels6.jpeg'

function ImgCard() {

  return (
    <>
    <section className='gallery'>
      <div className='item'>
        <img className='item-image' src={image1} alt="" />
        <button className='delete-button'>Delete</button>
      </div>
      <div className='item'>
      <img className='item-image' src={image2} alt="" />
      <button className='delete-button'>Delete</button>
    </div>
    <div className='item'>
    <img className='item-image' src={image3} alt="" />
    <button className='delete-button'>Delete</button>
  </div>
  <div className='item'>
    <img className='item-image' src={image4} alt="" />
    <button className='delete-button'>Delete</button>
  </div><div className='item'>
  <img className='item-image' src={image5} alt="" />
  <button className='delete-button'>Delete</button>
</div><div className='item'>
<img className='item-image' src={image6} alt="" />
<button className='delete-button'>Delete</button>
</div>
    ) 
    </section>
    </>
  )
}

export default ImgCard;