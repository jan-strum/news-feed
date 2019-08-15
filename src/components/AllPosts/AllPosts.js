import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Loading } from '../Loading'
import { SinglePost } from '../SinglePost'

import { getPosts } from '../../hooks/posts'

import './AllPosts.css'

export default function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  return posts.length ? (
    <div id='all-posts'>
      {posts.map(post => {
        const { id, title, body } = post

        return (
          <Link to={`/posts/${id}`} key={id} className='post-link'>
            <SinglePost title={title} body={body} />
          </Link>
        )
      })}
    </div>
  ) : (
    <Loading />
  )
}
