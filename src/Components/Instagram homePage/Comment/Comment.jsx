import './Comment.css'

import React from 'react'

function Comment(props) {
  const { accountName, comment } = props;

  return (
    <div className="commentContainer">
      <div className="accountName">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  )
}

export default Comment