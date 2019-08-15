import React, { useState, useEffect } from 'react'

import { getPost } from '../../hooks/posts'

export default function FullPost({ match }) {
  const { id } = match.params

  const [post, setPost] = useState({})

  useEffect(() => {
    getPost(id, setPost)
  }, [])

  const { title, body } = post
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}
