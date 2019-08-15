import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getPost } from '../../hooks/posts'

export default function FullPost({ match }) {
  const { id } = match.params

  const [post, setPost] = useState({})

  useEffect(() => {
    getPost(id, setPost)
  }, [id])

  const { title, body } = post
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

FullPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
