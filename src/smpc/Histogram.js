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
              Medical Subject Headings (MeSH) provides a hierarchically-organized terminology for indexing and cataloguing biomedical information such as MEDLINE/PUBmed and other databases from the US National Library of Medicine (NLM). Created and updated by the NLM, MeSH is used in articles, databases and the NLM's catalog of book holdings. MeSH terms are represented as normalized values. That is, even numerical attributes such as "Age", are separated into groups (for instance Child, Adult, etc).
            </p>
            <p>
              This dataset contains semantically annotated patient data based on the MeSH tree structure. In order to request an aggregation, the attributes must be specified and should be in the form that is defined by MeSH. For instance, for the attribute "Age", one would need to provide the MeSH ID M01.060, which has the following subcategories: Adolescent [M01.060.057], Adult [M01.060.116], Child [M01.060.406] and Infant [M01.060.703].
              </p>
              <p>Search mesh terms at: <a href='https://meshb.nlm.nih.gov/treeView' role='button' target='_blank' rel='noopener noreferrer'>MeSH Browser Tree View</a></p>
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
