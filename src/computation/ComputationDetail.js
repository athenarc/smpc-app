import React from 'react'
import className from 'classnames'

const ComputationDetail = ({ id, status, algorithm, time, attributes, filters }) => {
  const statusClass = className({
    'text-success': status === 'completed',
    'text-info': status === 'processing',
    'text-danger': status === 'failed'
  })

  const filtersHTML = filters.map((f, key) =>
    f &&
    <tr key={key}>
      <td>{f.attribute}</td>
      <td>{f.operator}</td>
      <td>{f.value}</td>
    </tr>
  )

  return (
    <div className='container'>
      <article className='my-3 p-3 bg-white rounded shadow-sm'>
        <h3 className='pb-2 mb-0'>Computation description</h3>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>ID: {id}</h6>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>Status: <span className={statusClass}>{status}</span></h6>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>Algorithm: {algorithm}</h6>
      </article>
      <article className='my-3 p-3 bg-white rounded shadow-sm'>
        <h3 className='pb-2 mb-0'>Attributes</h3>
        <hr className='mb-4' />
        <h6 className='pb-2 mb-0'>{attributes}</h6>
      </article>
      {
        filters && filters.length > 0 &&
        <article className='my-3 p-3 bg-white rounded shadow-sm'>
          <h3 className='pb-2 mb-0'>Filters</h3>
          <div className='table-responsive'>
            <table className='table table-borderless table-sm'>
              <thead>
                <tr>
                  <th scope='col'>Attribute</th>
                  <th scope='col'>Operator</th>
                  <th scope='col'>Value</th>
                </tr>
              </thead>
              <tbody>
                { filtersHTML }
              </tbody>
            </table>
          </div>
        </article>
      }
      {
        time && status === 'completed' &&
        <article className='my-3 p-3 bg-white rounded shadow-sm'>
          <h3 className='pb-2 mb-0'>Duration</h3>
          <hr className='mb-4' />
          <h6>Started at: {time.start}</h6>
          <hr className='mb-4' />
          <h6>Finished at: {time.end}</h6>
          <hr className='mb-4' />
          <h6>Total time: {time.diff}</h6>
        </article>
      }
    </div>
  )
}

export default ComputationDetail
