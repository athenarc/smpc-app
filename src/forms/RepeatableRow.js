import React from 'react'

export default function withRepeatableRow (Field) {
  class RepeatableRow extends React.Component {
    render () {
      return (
        <div className='repeatable-field'>
          <Field />
          <div className='add-btn'><button className='btn btn-primary'>Add</button></div>
        </div>
      )
    }
  }

  return RepeatableRow
}
