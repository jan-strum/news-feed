import React, { useState, useEffect } from 'react'

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
          <div id={id}>
            <div>{title}</div>
            <div>{body}</div>
          </div>
        )
      })}
    </div>
  )
}
