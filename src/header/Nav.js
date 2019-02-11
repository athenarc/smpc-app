import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import logo from '../assets/images/mhmd_logo_color.svg'

const Nav = ({ ...props }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand title' to='/'>
        <img src={logo} alt='mhmd' />
        <span>MHMD: Secure Analytics</span>
      </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/aggregation' activeClassName='active'>Data aggregation</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/classification' activeClassName='active'>Data classification</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/results' activeClassName='active'>Results</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
