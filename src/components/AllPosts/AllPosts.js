import React, { useState, useEffect } from 'react'
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

        return <SinglePost id={id} title={title} body={body} />
      })}
    </div>
  )
}
