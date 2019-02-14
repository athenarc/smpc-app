import React from 'react'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'

import DataSourceFormGroup from './DataSourcesFormGroup'
import FiltersFormGroup from './FiltersFormGroup'
import AttributesFormGroup from './AttributesFormGroup'
import ClassificationFormGroup from './ClassificationFormGroup'
import withRepeatableRow from './RepeatableRow'

import attributes from '../attributes.json'

const AttributeRepeatableRow = withRepeatableRow(AttributesFormGroup, 'attributes')
const FilterRepeatableRow = withRepeatableRow(FiltersFormGroup, 'filters')

const ClassificationFormComponent = ({ onSubmit }) => {
  return <Form
    onSubmit={onSubmit}
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
        <h4 className='mb-3'>Classification Information</h4>
        <ClassificationFormGroup attributes={attributes.cvi} />
        <hr className='mb-4' />
        <h4 className='mb-3'>Attributes</h4>
        <AttributeRepeatableRow push={push} attributes={attributes.cvi} />
        <hr className='mb-4' />
        <h4 className='mb-3'>Filters</h4>
        <FilterRepeatableRow push={push} attributes={attributes.cvi} />
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

export default ClassificationFormComponent
