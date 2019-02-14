import React from 'react'

import HistogramFormComponent from './HistogramFormComponent'
import withForm from './FormHOC'

const FormComponent = withForm(HistogramFormComponent)

const HistogramForm = () => <FormComponent />

export default HistogramForm
