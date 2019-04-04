import React from 'react'
const Toast = ({ ...props }) => {
  return (
    <div className='toast show' role='alert' aria-live='assertive' aria-atomic='true'>
      <div className='toast-header'>
        <strong className='mr-auto'>Notification</strong>
        <small>Just now</small>
        <button type='button' className='ml-2 mb-1 close' data-dismiss='toast' aria-label='Close' onClick={props.onClose}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='toast-body'>
        Computation accepted! <br />
        ID: <b>{props.id}</b>
      </div>
    </div>
  )
}

export default Toast
