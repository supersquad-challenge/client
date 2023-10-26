"use client"
import { login } from '@/lib/api/axios/auth/login';
import React, { createContext, ReactNode, useEffect, useState} from 'react';

interface authContext {
  isLogin: boolean;
  userId: string | undefined;
  userName: string | null;
  userAddress: string | null;
  userProfile: string | null;
}

const defaultValue: authContext = {
  isLogin: false,
  userId: undefined,
  userName: null,
  userAddress: null,
  userProfile: null
}

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setisLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    if (isLogin === false) {
      handleLogin();
    }
    const user = localStorage.getItem('supersquad');
    if (user !== undefined && user !== null) {
      const username = sessionStorage.getItem('supersquad_username');
      const profile = sessionStorage.getItem('supersquad_userprofile');

      setUserId(user);
      setUserName(username);
      setUserProfile(profile);
      setisLogin(true);
    }
  }, [isLogin, userId])
  
  const handleLogin = async() => {
    const res = await login();
    if (res !== undefined && res.status === 200) {
      localStorage.setItem('supersquad', res.data.userInfoId);
      sessionStorage.setItem('supersquad_username', res.data.nickname);
      sessionStorage.setItem('supersquad_userprofile', res.data.picture);
    }
  }

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