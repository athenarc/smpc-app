import React from 'react'
import { Field } from 'react-final-form'

const DataSourceFormGroup = () => {
  return (
    <div className='form-group form-check form-check-inline datasources'>
      <div className='custom-control custom-switch datasource'>
        <Field type='checkbox' value='0' name='dataProviders' id='0' component='input' className='custom-control-input' />
        <label className='custom-control-label' htmlFor='0'>Hospital A</label>
      </div>
      <div className='custom-control custom-switch datasource'>
        <Field type='checkbox' value='1' name='dataProviders' id='1' component='input' className='custom-control-input' />
        <label className='custom-control-label' htmlFor='1'>Hospital B</label>
      </div>
      <div className='custom-control custom-switch datasource'>
        <Field type='checkbox' value='2' name='dataProviders' id='2' component='input' className='custom-control-input' />
        <label className='custom-control-label' htmlFor='2'>Hospital C</label>
      </div>
    </div>
  )
}

export default DataSourceFormGroup
