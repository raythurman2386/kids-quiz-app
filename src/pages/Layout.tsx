import React from 'react';
import Navbar from '../components/nav/Navbar';

const Layout = (props: { children: any }) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
