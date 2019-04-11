import React from 'react'

import ComputationListItem from './ComputationListItem'

const ComputationList = ({ computations, checkStatus, deleteComputation }) => {
  return (
    <section className='computations'>
      {
        computations.map((computation) =>
          <ComputationListItem {...computation} key={computation.id} checkStatus={checkStatus} deleteComputation={deleteComputation} />
        )
      }
    </section>
  )
}

export default ComputationList
