import React from 'react'
import { Form } from 'react-final-form'

import DataSourceFormGroup from './DataSourcesFormGroup'
import FiltersFormGroup from '../forms/FiltersFormGroup'
import AttributesFormGroup from '../forms/AttributesFormGroup'
import withRepeatableRow from '../forms/RepeatableRow'

const AttributeRepeatableRow = withRepeatableRow(AttributesFormGroup)
const FilterRepeatableRow = withRepeatableRow(FiltersFormGroup)

class HistogramForm extends React.Component {
  render () {
    return <Form
      onSubmit={this.props.onSubmit}
      render={({ handleSubmit, form, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <h4 class='mb-3'>Attributes</h4>
          <AttributeRepeatableRow />
          <hr class='mb-4' />
          <h4 class='mb-3'>Filters</h4>
          <FilterRepeatableRow />
          <hr class='mb-4' />
          <h4 class='mb-3'>Datasources</h4>
          <hr class='mb-4' />
          <DataSourceFormGroup />
          <hr class='mb-4' />
          <button className='btn btn-primary btn-lg btn-block' type='submit' disabled={submitting}>Request computation</button>
        </form>
        )}
      />
  }
}

export default HistogramForm
