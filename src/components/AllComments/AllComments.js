import React from 'react'
import PropTypes from 'prop-types'

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

AllComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).is
  ).isRequired
}
