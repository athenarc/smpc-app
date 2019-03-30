import React from 'react'

import HistogramFormComponent from './HistogramFormComponent'
import withForm from './FormHOC'

const FormComponent = withForm(HistogramFormComponent, { action: 'requestHistCategorical' } )

const HistogramForm = () => <FormComponent />

export default HistogramForm
