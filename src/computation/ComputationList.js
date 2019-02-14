import React from 'react'

import SingleComputation from './SingleComputation'

const ComputationList = ({ computations }) => {
  return (
    <section className='computations'>
      {
        computations.map((computation) =>
          <SingleComputation {...computation} key={computation.id} />
        )
      }
    </section>
  )
}

export default ComputationList
