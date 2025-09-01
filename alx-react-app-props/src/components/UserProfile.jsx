import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

function UserProfileWithContext(props) {
  const context = useContext(UserContext);
  return <UserProfile {...context} {...props} />;
}

export default UserProfileWithContext;