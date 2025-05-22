// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import storage from '../utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://192.168.3.179/expo-admin/backend/public/api/login', {
        email,
        password,
      });

      const { token, user: userData } = response.data;
      await storage.setItem('token', token);
      await storage.setItem('user', JSON.stringify(userData));
      setUser({ token, ...userData });
    } catch (e) {
      throw new Error('Login fallido');
    }
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