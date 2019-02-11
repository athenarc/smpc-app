import React from 'react'

class Results extends React.Component {
  render () {
    return (
      <section className='home'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>Computation results</h1>
            <p className='lead'>Check the status of your computation</p>
            <hr className='my-4' />
            <p>
               The results
            </p>
          </div>
        </div>
        <div className='container'>
          <form>
            <div className='form-group'>
              <label for='exampleInputEmail1'>Computation ID</label>
              <input type='text' className='form-control' id='computation-id' aria-describedby='emailHelp' />
              <small id='computation-help' className='form-text text-muted'>The ID of your computation</small>
            </div>
            <button type='submit' class='btn btn-primary'>Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Results
