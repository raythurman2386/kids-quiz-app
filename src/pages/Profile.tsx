import React from 'react';
import { connect } from 'react-redux';
import ChildCard from '../components/cards/ChildCard';
import { Wrapper } from './Dashboard';

// Temp styled comp import
import styled from 'styled-components';

const Profile = ({ welcomeMessage, user }: any) => {
  const hasChildren = user.children.length > 0;
  return (
    <NewWrapper>
      <div className='user_profile'>
        <h2>{welcomeMessage}</h2>
        <p>Email: {user.email}</p>
      </div>
      <div className='child_progress'>
        {user.role === 'parent' ? (
          <h3>My Children's Progress</h3>
        ) : (
          <h3>My Progress</h3>
        )}
        {/* If the user has kids, list child cards */}
        {hasChildren &&
          user.children.map((child: any) => (
            <ChildCard key={child.id} child={child} />
          ))}
      </div>
    </NewWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  welcomeMessage: state.user.message,
  user: state.user.user,
});

export default connect(mapStateToProps, {})(Profile);

const NewWrapper = styled(Wrapper)`
  display: flex;
  .user_profile {
    width: 30%;

    @media (max-width: 1000px) {
      display: none;
    }
  }
  .child_progress {
    width: 70%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;
