import React from 'react'

const SingleComputation = ({ ...props }) => {
  return (
    <div className='media text-muted pt-3' >
      <span className='badge badge-primary mr-2'>{props.status}</span>
      <span className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>{props.id}</span>
    </div>
  )
}

export default SingleComputation
