import './Stories.css'

import React from 'react'
import ScrollMenu  from 'react-horizontal-scrolling-menu';
import Story from '../Story/Story';

function Stories() {
  return (
    <div className='stories'>
    <ScrollMenu>
    <Story/>
    <Story/>
    <Story/>
    <Story/>
    <Story/>
    <Story/>
    <Story/>
    <Story/>
    </ScrollMenu>
    </div>
  )
}

export default Stories