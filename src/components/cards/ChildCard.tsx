import React from 'react';

// temp styled comp import
import styled from 'styled-components';

const ChildCard = ({ child }: any) => {
  return (
    <Wrapper>
      <p>Child Username: {child.username}</p>
      <p>Child Email: {child.email}</p>
      <p>Average: {(Math.floor(Math.random() * 10) + 1) * 10}%</p>
      {/* Will add a graph component for childs test scores */}
    </Wrapper>
  );
};

export default ChildCard;

const Wrapper = styled.article`
  width: 100%;
  height: 250px;
  text-align: left;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: linear-gradient(145deg, #fbffff, #d4e5e6);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
`;
