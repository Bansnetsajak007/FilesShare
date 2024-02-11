//This is the nav component

import React from 'react';
import { Link } from 'react-router-dom';
// import {Navbar} from './components/Navbar';
// import Sharepage from './components/Sharepage';
// import Downloadpage from './components/Downloadpage';
import '../styles/NavStyle.css'

export const Navbar = () => {
  return (
    <div className="nav-container">
        <Link to='/' className='nav-link nav-link-green'>Sharefile</Link>
        <Link to='/downloadfile' className='nav-link nav-link-blue'>downloadfile</Link>
    </div>

  )
}
