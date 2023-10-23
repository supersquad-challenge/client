"use client"
import { login } from '@/lib/api/axios/auth/login';
import React, { createContext, ReactNode, useEffect, useState} from 'react';

interface authContext {
  isLogin: boolean;
  userId: string | undefined;
  userName: string | undefined;
  userAddress: string | undefined;
  userProfile: string | undefined;
}

const defaultValue: authContext = {
  isLogin: false,
  userId: undefined,
  userName: undefined,
  userAddress: undefined,
  userProfile: undefined
}

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setisLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [userAddress, setUserAddress] = useState<string | undefined>(undefined);
  const [userProfile, setUserProfile] = useState<string | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    const res = login();
    console.log("login res", res);
    const user = localStorage.getItem('supersquad');
    if (user !== undefined && user !== null) {
      setUserId(user);
      setisLogin(true);
    }
  }, [])

  const contextValue = {
    isLogin,
    userId,
    userName,
    userAddress,
    userProfile
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export { AuthContext, AuthProvider }