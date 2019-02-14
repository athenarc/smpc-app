import React from 'react'

import ClassificationFormComponent from './ClassificationFormComponent'
import withForm from './FormHOC'

const FormComponent = withForm(ClassificationFormComponent)

class ClassificationForm extends React.Component {
  render () {
    return <FormComponent />
  }
}

export default ClassificationForm
