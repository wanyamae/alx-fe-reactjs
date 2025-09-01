import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserDetails = () => {
    const userData = useContext(UserContext);

    if (!userData) {
        return <div>No user data available.</div>;
    }

    return (
        <div>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            {/* Add more user fields as needed */}
        </div>
    );
};

export default UserDetails;