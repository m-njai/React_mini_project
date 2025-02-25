import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]); // Store registered users

  const registerUser = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, registeredUsers, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};