import React from 'react'
import PropTypes from 'prop-types'
import SingleComment from '../SingleComment/SingleComment'

export default function AllComments({ comments }) {
  console.log(comments)
  return (
    <div>
      <h4>Comments</h4>
      {comments.map(comment => {
        const { id, name, body } = comment
        return <SingleComment key={id} name={name} body={body} />
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
    }).isRequired
  ).isRequired
}
