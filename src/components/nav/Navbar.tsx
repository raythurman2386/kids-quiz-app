import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../styles/Nav.style';

const Navbar = () => {
  return (
    <Wrapper data-testid='navbar-component'>
      <h1 data-testid='nav-title'>Kidspace</h1>
      <nav data-testid='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
