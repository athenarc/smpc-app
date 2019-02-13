import React from 'react'
import { Form } from 'react-final-form'

import HistogramFormComponent from './HistogramFormComponent'
import withForm from './FormHOC'

const FormComponent = withForm(HistogramFormComponent)

class HistogramForm extends React.Component {
  render () {
    return <FormComponent />
  }
}

export default HistogramForm
