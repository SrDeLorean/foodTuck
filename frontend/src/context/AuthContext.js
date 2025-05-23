// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import storage from '../utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const data = {
    user: {
      nombre: "Sebastian",
      role: "admin",
    },
    token: "sadasdsaf34180vusd9314",
  };

  const login = async (email, password) => {
    // Simulación de login, reemplaza con llamada real a API
    const { token, user: userData } = data;
    await storage.setItem('token', token);
    await storage.setItem('user', JSON.stringify(userData));
    setUser({ token, ...userData });
  };

  const logout = async () => {
    await storage.removeItem('token');
    await storage.removeItem('user');
    setUser(null);
  };

  const checkLogin = async () => {
    const token = await storage.getItem('token');
    const userData = await storage.getItem('user');
    if (token && userData) {
      setUser({ token, ...JSON.parse(userData) });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};