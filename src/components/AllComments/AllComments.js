import React from 'react'
import PropTypes from 'prop-types'
import SingleComment from '../SingleComment/SingleComment'

import './AllComments.css'

export default function AllComments({ comments }) {
  return (
    <div id='comments'>
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
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
