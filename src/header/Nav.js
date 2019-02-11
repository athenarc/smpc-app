import React from 'react'

import logo from '../assets/images/mhmd_logo_color.svg'

const Nav = ({ ...props }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand title'>
        <img src={logo} alt='mhmd' />
        <span>MHMD: Secure Analytics</span>
      </a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Data aggregation</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Data classification</a> 
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
