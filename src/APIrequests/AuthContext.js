
import React, { createContext, useState } from 'react';
import apiService from './apiService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (username, email, password) => {
    try {
      const response = await apiService.register(username, email, password);
      return response.data;
    } catch (error) {
      console.error("Registration error", error);
      throw error;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await apiService.login(username, password);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
