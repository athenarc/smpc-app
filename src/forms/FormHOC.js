import React from 'react'

export default function withForm (FormComponent) {
  class Form extends React.Component {
    constructor() {
      super()
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit (request) {
      console.log('submit', request)
    }

    render () {
      return (
        <div className='my-3 p-3 bg-white rounded shadow-sm'>
          <FormComponent onSubmit={this.onSubmit} />
        </div>
      )
    }
  }

  return Form
}
