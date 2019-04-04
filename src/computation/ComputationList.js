import React from 'react'

import SingleComputation from './SingleComputation'

const ComputationList = ({ computations, checkStatus }) => {
  return (
    <section className='computations'>
      {
        computations.map((computation) =>
          <SingleComputation {...computation} key={computation.id} checkStatus={checkStatus} />
        )
      }
    </section>
  )
}

export default ComputationList
