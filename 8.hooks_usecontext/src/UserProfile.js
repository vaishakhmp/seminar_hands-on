import React from 'react';
import { useUser } from './UserContext';

function UserProfile() {
  const { user, login, logout } = useUser();

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => login({ name: 'John' })}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;