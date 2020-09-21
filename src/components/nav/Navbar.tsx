import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Wrapper } from '../../styles/Nav.style';
import { logoutUser } from '../../actions/user';

const Navbar = ({ isLoggedIn, logoutUser, history }: any) => {
  const handleClick = (e: any) => {
    logoutUser();
    history.push('/');
  };

  return (
    <Wrapper data-testid='navbar-component'>
      <h1 data-testid='nav-title'>Kidspace</h1>
      <nav data-testid='nav-links'>
        <Link to='/'>Home</Link>
        {isLoggedIn ? (
          <>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/' onClick={e => handleClick(e)}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </nav>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Navbar));
