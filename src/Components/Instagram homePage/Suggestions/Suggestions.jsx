import './Suggestions.css'

import Profile from '../Profile/Profile'
import React from 'react'

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title1">Suggestions For You</div>
        <a href="/" style={{ color: 'black',marginLeft: '8vw' }}>See All</a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"

      />
      <Profile
        caption="Followed by dadatlacak + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by dadatlacak + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by vault + 6 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  )
}

export default Suggestions