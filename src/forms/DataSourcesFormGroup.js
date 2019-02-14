import React from 'react'
import { Field } from 'react-final-form'

const DataSourceFormGroup = () => {
  return (
    <div className='form-group form-check form-check-inline datasources'>
      <div className='custom-control custom-switch datasource'>
        <Field type='checkbox' value='data-provider-1' name='data-providers' id='data-provider-1' component='input' className='custom-control-input' />
        <label className='custom-control-label' htmlFor='data-provider-1'>Hospital A</label>
      </div>
      <div className='custom-control custom-switch datasource'>
        <Field type='checkbox' value='data-provider-2' name='data-providers' id='data-provider-2' component='input' className='custom-control-input' />
        <label className='custom-control-label' htmlFor='data-provider-2'>Hospital B</label>
      </div>
    </div>
  )
}

export default DataSourceFormGroup
