import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ ...props }) => {
  return (
    <section className='home'>
      <div className='jumbotron'>
        <div className='container'>
          <h1 className='display-4'>Secure Analytics over Patient Data</h1>
          <p className='lead'>Use case</p>
          <hr className='my-4' />
          <p>
            A secure computation analytics platform over patient encrypted data. The
            patient data are being encrypted before leaving the data providers
            (hospitals) and imported to the secure multi-party computation (SMPC)
            platform/servers. The privacy preserving algorithms have no access to
            plain-text data, since no plaintext value leaves data owner's premises
            unencrypted. Our algorithms have been developed over the Sharemind
            platform, which employs secure multi-party computation, leveraging
            additive secret sharing techniques that have homomorphic encryption
            properties. Thus, our application servers process data without removing
            the protection. Our platform solely decrypts and publishes the final
            results of the query, which leaks no information.
          </p>
          <a className='btn btn-primary btn-lg' href='#' role='button'>Learn more</a>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Secure data aggregation</h5>
                <p className='card-text'>
                Perform analytics using privacy-preserving data aggregation
                algorithms for computing and visualizing multi-dimemsional
                histograms.
                </p>
                <Link to='/aggregation' className='btn btn-primary'>Request computation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
