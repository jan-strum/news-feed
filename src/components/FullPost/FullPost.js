import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { AllComments } from '../AllComments'

import { getPost } from '../../hooks/posts'
import getComments from '../../hooks/comments'

export default function FullPost({ match }) {
  const { id } = match.params

  const [post, setPost] = useState({})
  const [comments, setcomments] = useState([])

  useEffect(() => {
    getPost(id, setPost)
    getComments(id, setcomments)
  }, [id])

  const { title, body } = post
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <AllComments comments={comments} />
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
