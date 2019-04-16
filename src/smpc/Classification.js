import React from 'react'
import ClassificationForm from '../forms/ClassificationForm'

class Classification extends React.Component {
  render() {
    return (
      <section className='home'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>Secure Data Classification</h1>
            <p className='lead'>Generate decision trees from patient data using the privacy-preserving ID3 classifier.</p>
            <hr className='my-4' />
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
          <ClassificationForm />
        </div>
      </section>
    )
  }
}

export default Classification
