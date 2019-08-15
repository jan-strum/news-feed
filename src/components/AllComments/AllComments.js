import React from 'react'

export default function AllComments({ comments }) {
  console.log(comments)
  return (
    <div>
      <h4>Comments</h4>
      {comments.map(comment => {
        const { id, name, body } = comment
        return (
          <div id={id}>
            <h3>{name}</h3>
            <p>{body}</p>
          </div>
        )
      })}
    </div>
  )
}
