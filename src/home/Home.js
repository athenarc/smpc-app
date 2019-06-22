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
            A platform for secure aggregation of private patient data based on SPDZ.  The implemented importation mechanism enables data providers to secret share their dataset between the remote nodes comprising the SMPC cluster without compromising privacy and security; Patient data never leave a hospital unencrypted and are only retrievable by cooperation of all SMPC nodes. Our backend is powered by open-source software "SCALE-MAMBA" which is a sophisticated tool for SMPC. The supported algorithms include numerical and categorical histograms as well as secure aggregation.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Secure histogram computation</h5>
                <p className='card-text'>
                  Request a secure histogram computation
                </p>
                <Link to='/histogram' className='btn btn-primary'>Request computation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
