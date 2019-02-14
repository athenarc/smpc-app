import React from 'react'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'

import DataSourceFormGroup from './DataSourcesFormGroup'
import FiltersFormGroup from './FiltersFormGroup'
import AttributesFormGroup from './AttributesFormGroup'
import withRepeatableRow from './RepeatableRow'

const AttributeRepeatableRow = withRepeatableRow(AttributesFormGroup, 'attributes')
const FilterRepeatableRow = withRepeatableRow(FiltersFormGroup, 'filters')

class ClassificationFormComponent extends React.Component {
  render () {
    return <Form
      onSubmit={this.props.onSubmit}
      mutators={{
        ...arrayMutators
      }}
      render={({
        handleSubmit,
        form: { mutators: { push, pop } },
        pristine,
        reset,
        submitting,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <h4 className='mb-3'>Attributes</h4>
          <AttributeRepeatableRow push={push}/>
          <hr className='mb-4' />
          <h4 className='mb-3'>Filters</h4>
          <FilterRepeatableRow push={push} />
          <hr className='mb-4' />
          <h4 className='mb-3'>Datasources</h4>
          <hr className='mb-4' />
          <DataSourceFormGroup />
          <hr className='mb-4' />
          <button className='btn btn-primary btn-lg btn-block' type='submit' disabled={submitting}>Request computation</button>
        </form>
        )}
      />
  }
}

export default ClassificationFormComponent
