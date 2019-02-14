import React from 'react'

import SingleComputation from './SingleComputation'

const ComputationList = ({ ...props }) => {
  return (
    <section className='computations'>
      {
        props.computations.map((computation) =>
          <SingleComputation {...computation} key={computation.id} />
        )
      }
    </section>
  )
}

export default ComputationList
