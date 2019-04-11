import React from 'react'
import { Link } from 'react-router-dom'

const SingleComputation = ({ status, id, checkStatus, deleteComputation }) => {
  return (
    <div className='media text-muted border-bottom border-gray single-computation' >
      <Link to={`/computation/${id}`} className='media-body mb-0 small'>
        <span className='badge badge-primary mr-2'>{status}</span>
        <span>
          {id}
        </span>
      </Link>
      <div className='actions'>
        <button type='button' className='btn btn-outline-dark btn-sm' onClick={() => checkStatus(id)}>Refresh</button>
        <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => deleteComputation(id)}>Delete</button>
      </div>
    </div>
  )
}

export default SingleComputation
