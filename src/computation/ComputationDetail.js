import React from 'react'

const ComputationDetail = ({ id, status, algorithm, time, attributes }) => {
  return (
    <div className='container'>
      <article className='my-3 p-3 bg-white rounded shadow-sm'>
        <h6 className='pb-2 mb-0'>ID: {id}</h6>
        <h6 className='pb-2 mb-0'>Status: {status}</h6>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>Attributes: {attributes}</h6>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>Filters:</h6>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>Algorithm: {algorithm}</h6>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>Times</h6>
        <div>Started at: {time.start}</div>
        <div>Finidhed at: {time.end}</div>
        <div>Total time: {time.diff}</div>
        <div />
      </article>
    </div>
  )
}

export default ComputationDetail
