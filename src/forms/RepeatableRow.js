import React from 'react'
import classNames from 'classnames'
import { FieldArray } from 'react-final-form-arrays'

export default function withRepeatableRow (Field, key) {
  class RepeatableRow extends React.Component {
    componentDidMount () {
      this.props.push(key, undefined)
    }

    render () {
      return (
        <div className='repeatable-fields'>
          <FieldArray name={key}>
            {({ fields }) =>
                  fields.map((name, index) => (
                    <div className='repeatable-field' key={name}>
                      <Field name={name} index={index} />
                        <button type='button' className={classNames('close', {invisible: (index === 0)})} aria-label='Close' onClick={() => fields.remove(index)} >
                          <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                  ))}
          </FieldArray>
          <div className='add-btn'>
            <button type='button' className='btn btn-primary' onClick={() => this.props.push(key, undefined)}>Add</button>
          </div>
        </div>
      )
    }
  }

  return RepeatableRow
}
