import React from 'react'

export default function SingleComment({ name, body }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>{body}</p>
    </div>
  )
}
