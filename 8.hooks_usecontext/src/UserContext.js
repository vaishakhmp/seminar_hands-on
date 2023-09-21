import React, { createContext, useContext, useState } from 'react';

// Create a UserContext
const UserContext = createContext();

// Custom hook to consume the UserContext
export function useUser() {
  return useContext(UserContext);
}

// Create a UserProvider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Example function to set the user
  const login = (userData) => {
    setUser(userData);
  };

  // Example function to log out
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
} 