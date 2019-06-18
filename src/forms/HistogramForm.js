import React from 'react'

import { Form, FormSpy } from 'react-final-form'
import arrayMutators from 'final-form-arrays'

import Algorithms from './Algorithms'
import DataSourceFormGroup from './DataSourcesFormGroup'
import FiltersFormGroup from './FiltersFormGroup'
import AttributesFormGroup from './AttributesFormGroup'
import withRepeatableRow from './RepeatableRow'

import withForm from './FormHOC'

import keywords from '../smpc-global/keywords.json'
import meshAttributes from '../smpc-global/meshAttributes.json'
import algorithms from '../smpc-global/algorithms.json'

const AttributeRepeatableRow = withRepeatableRow(AttributesFormGroup, 'attributes')
const FilterRepeatableRow = withRepeatableRow(FiltersFormGroup, 'filters')

class HistogramForm extends React.Component {
  constructor () {
    super()
    this.listeners = {
      algorithm: this.onAlgorithmChange.bind(this)
    }

    this.state = {
      attributes: keywords,
      algorithms: algorithms.filter(alg => alg.name.includes('histogram'))
    }

    this.onFormChange = this.onFormChange.bind(this)
  }

  onAlgorithmChange (event) {
    const algorithm = event.target.value

    switch (algorithm) {
      case '1d_categorical_histogram':
      case '2d_categorical_histogram':
        this.setState({
          attributes: keywords
        })
        break
      case '1d_numerical_histogram':
      case '2d_numerical_histogram':
        this.setState({
          attributes: meshAttributes.filter(a => a.type === 'numerical'),
        })
        break
      case '2d_mixed_histogram':
        this.setState({
          attributes: [ ...meshAttributes, ...keywords ]
        })
        break
      default:
        break
    }
  }

  onFormChange ({ values }) {
    console.log(values)
  }

  render () {
    return (
      <Form
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
          <h4 className='mb-3'>Algorithm</h4>
          <Algorithms algorithms={algorithms} listener={this.listeners.algorithm} />
          <h4 className='mb-3'>Attributes</h4>
          <AttributeRepeatableRow push={push} attributes={this.state.attributes} />
          <hr className='mb-4' />
          <h4 className='mb-3'>Filters</h4>
          <FilterRepeatableRow push={push} attributes={this.state.attributes} />
          <hr className='mb-4' />
          <h4 className='mb-3'>Datasources</h4>
          <hr className='mb-4' />
          <DataSourceFormGroup />
          <hr className='mb-4' />
          <button className='btn btn-primary btn-lg btn-block' type='submit' disabled={submitting}>Request computation</button>
        <div>
          <FormSpy subscription={{ values: true }} onChange={this.onFormChange} />
          <form onSubmit={handleSubmit}>
          </form>
        </div>
        )}
      />)
  }
}

export default withForm(HistogramForm, { action: 'requestHistogram' })
