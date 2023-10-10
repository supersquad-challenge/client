"use client"
import React, { createContext, ReactNode, useEffect, useState} from 'react';

interface authContext {
  isLoggined: boolean;
  userName: string | undefined;
  userAddress: string | undefined;
  userProfile: string | undefined;
}

const defaultValue: authContext = {
  isLoggined: false,
  userName: undefined,
  userAddress: undefined,
  userProfile: undefined
}

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggined, setIsLoggined] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [userAddress, setUserAddress] = useState<string | undefined>(undefined);
  const [userProfile, setUserProfile] = useState<string | undefined>(undefined);

  useEffect(() => {

  }, [])

  const contextValue = {
    isLoggined,
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