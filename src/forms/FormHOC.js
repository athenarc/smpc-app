import React from 'react'

export default function withForm (FormComponent) {
  class Form extends React.Component {
    constructor() {
      super()
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit () {}

    render () {
      return (
        <FormComponent onSubmit={this.onSubmit} />
      )
    }
  }

  return Form
}
