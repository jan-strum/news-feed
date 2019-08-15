import React from 'react'
import PropTypes from 'prop-types'

import './SingleComment.css'

export default function SingleComment({ name, body }) {
  return (
    <div id='comment'>
      <h5>{name}</h5>
      <p id='comment-body'>{body}</p>
    </div>
  )
}

SingleComment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
