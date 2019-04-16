import React from 'react'
import HistogramForm from '../forms/HistogramForm'

class Histogram extends React.Component {
  render () {
    return (
      <section className='aggregation'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>Secure Histograms</h1>
            <p className='lead'>Perform analytics using privacy-preserving data aggregation algorithms for computing and visualizing multi-dimemsional histograms.</p>
            <hr className='my-4' />
            <p>
            CVI Dataset: Cardiovascular disease is a class of diseases that
            involve the heart or blood vessels. Cardiovascular disease includes
            coronary artery diseases (CAD) such as angina and myocardial
            infarction (commonly known as a heart attack). This dataset contains
            CardioVascular Imaging (CVI) information, which are represented as
            numerical values – not normalized.
            </p>
          </div>
        </div>
        <div className='container'>
          <HistogramForm />
        </div>
      </section>
    )
  }
}

export default Histogram
