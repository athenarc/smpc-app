import React from 'react'

import ClassificationFormComponent from './ClassificationFormComponent'
import withForm from './FormHOC'

const FormComponent = withForm(ClassificationFormComponent)

const ClassificationForm = () => <FormComponent />

export default ClassificationForm
