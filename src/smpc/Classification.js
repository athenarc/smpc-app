import React from 'react'

class Classification extends React.Component {
  render() {
    return (
      <section className='home'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>Secure Data Classification</h1>
            <p className='lead'>Generate decision trees from patient data using the privacy-preserving ID3 classifier.</p>
            <hr className='my-4' />
            <p> MeSH Dataset: MeSH provides a hierarchically-organized terminology
            for indexing and cataloging of biomedical information such as
            MEDLINE/PUBmed and other United States National Library of Medicine
            (NLM) databases. Created and updated by the NLM, it is used by
            articles databases and by NLM's catalog of book holdings. This dataset
            is based on the MeSH tree structure. MeSH terms are represented as
            normalized values; this means that even attributes like Age, are
            separated into groups (for instance Child, Adult, etc). </p>
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
      </section>
    )
  }
}

export default Classification
