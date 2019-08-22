import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import logo from '../assets/images/mhmd_logo_color.svg'

import Avatar from './Avatar'

const Nav = ({ ...props }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand title' to='/'>
        <img src={logo} alt='mhmd' className='logo' />
        <span>MHMD: Secure Analytics</span>
      </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/dashboard' activeClassName='active'>Dashboard</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/computations' activeClassName='active'>Computations</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/histogram' activeClassName='active'>Secure Histograms</NavLink>
          </li>
        </ul>
        <Avatar />
      </div>
    </nav>
  )
}

export default Nav
