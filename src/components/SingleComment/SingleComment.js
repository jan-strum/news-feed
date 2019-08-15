import React from 'react'
import PropTypes from 'prop-types'

export default function SingleComment({ name, body }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>{body}</p>
    </div>
  )
}

SingleComment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
