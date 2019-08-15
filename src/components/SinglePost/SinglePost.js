import React from 'react'
import PropTypes from 'prop-types'

export default function SinglePost({ title, body }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

SinglePost.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
