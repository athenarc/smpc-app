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
              Medical Subject Headings (MeSH) provides a hierarchically-organized terminology for indexing
              and cataloging of biomedical information such as MEDLINE/PUBmed and
              other United States National Library of Medicine (NLM) databases.
              Created and updated by the NLM, it is used by articles databases and
              by NLM's catalog of book holdings. This dataset is based on the MeSH
              tree structure. MeSH terms are represented as normalized values;
              this means that even attributes like <i>Age</i>, are separated into
              groups (for instance <i>Child</i>, <i>Adult</i>, etc). This dataset
              contains semantically annotated patient data.
              In order to request an aggregation, the attributes must be specified and
              should be in the form that is defined by MeSH. For instance, for attribute
              <i>Age</i>, provide the <i>M01.060</i> MeSH ID, which has the following
              subcategories: <i>    Adolescent [M01.060.057], Adult [M01.060.116], Child
              [M01.060.406], Infant [M01.060.703]</i>.</p>
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
