import React from 'react'

import HistogramFormComponent from './HistogramFormComponent'
import withForm from './FormHOC'

const FormComponent = withForm(HistogramFormComponent)

class HistogramForm extends React.Component {
  render () {
    return <FormComponent />
  }
}

export default HistogramForm
