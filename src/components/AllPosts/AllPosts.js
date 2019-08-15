import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SinglePost } from '../SinglePost'

import { getPosts } from '../../hooks/posts'

export default function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  return (
    <div id='all-posts'>
      {posts.map(post => {
        const { id, title, body } = post

        return (
          <Link to={`/posts/${id}`} key={id}>
            <SinglePost title={title} body={body} />
          </Link>
        )
      })}
    </div>
  )
}
