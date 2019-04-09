import React from 'react'

import PlotComponent from '../plot/PlotComponent'

const ComputationDetail = ({ computation }) => {
    console.log(computation)
  return (
    <div>
      <div className='plot'>
        <PlotComponent algorithm='1d_categorical_histogram' />
      </div>
      <div className='container'>
        <article className='my-3 p-3 bg-white rounded shadow-sm'>
          <h6 class="pb-2 mb-0">ID: f8eefa9e-8f63-467e-8c7c-5904ebe9a38b</h6>
          <h6 class="pb-2 mb-0">Status: Completed</h6>
          <hr className='mb-4' />
          <h6 class="pb-2 mb-0">Attributes</h6>
          <hr className='mb-4' />
          <h6 class="pb-2 mb-0">Filters</h6>
          <hr className='mb-4' />
          <h6 class="pb-2 mb-0">Algorithm</h6>
          <div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ComputationDetail
