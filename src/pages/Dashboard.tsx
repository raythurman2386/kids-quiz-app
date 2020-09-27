import React from 'react';
import styled from 'styled-components';
// import { Link, Route } from 'react-router-dom';
// import Home from './Home';

const Dashboard = () => {
  return (
    <Wrapper>
      <p>Dashboard</p>
      {/* The dashboard will house all of */}
      {/* The game cards and routes to those */}
      {/* specific games */}
      <p>This page is currently under development.</p>
      <p>Check back shortly to see the games dashboard!</p>
    </Wrapper>
  );
};

export default Dashboard;

export const Wrapper = styled.div`
  width: 80%;
  background: var(--white);
  border-radius: var(--border-radius);
  border: 2px solid var(--primary);
  padding: 20px;
  text-align: center;
  margin: var(--spacing) auto;

  p {
    font-size: 1rem;
  }
`;
