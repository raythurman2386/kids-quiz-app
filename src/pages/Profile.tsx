import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './Dashboard';

const Profile = ({ welcomeMessage }: any) => {
  return (
    <Wrapper>
      <p>{welcomeMessage}</p>
      <p>This page is currently under development.</p>
      <p>Check back shortly to see your user profile!</p>
      <p>If you are a parent, your childs progress will be here as well</p>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  welcomeMessage: state.user.message,
});

export default connect(mapStateToProps, null)(Profile);
