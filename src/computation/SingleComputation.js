import React from 'react'

const SingleComputation = ({ status, id, checkStatus }) => {
  return (
    <div className='media text-muted border-bottom border-gray single-computation' >
      <span className='badge badge-primary mr-2'>{status}</span>
      <span className='media-body mb-0 small'>
        {id}
      </span>
      <button type='button' class='btn btn-outline-dark btn-sm' onClick={() => checkStatus(id)}>Refresh</button>
    </div>
  )
}

export default SingleComputation
