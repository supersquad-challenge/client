"use client"
import { AxiosResponse } from 'axios';
import React, { createContext, ReactNode, useState } from 'react';

interface windowContext {
  modalState: string | undefined;
  handleModalState: (stats: string | undefined) => void;
  loadingState: boolean;
  handleLoadingState: (state: boolean) => void;
  useCallHandler: <T> (args: T, func: (args: T) => Promise<AxiosResponse | undefined>) => Promise<AxiosResponse | undefined>;
  statusCode: number | undefined;
  handleStatusCode: (code: number | undefined) => void;
}

const defaultValue: windowContext = {
  modalState: undefined,
  handleModalState: () => {},
  loadingState: false,
  handleLoadingState: () => {},
  useCallHandler: async () => undefined,
  statusCode: undefined,
  handleStatusCode: () => {}
};

const WindowContext = createContext(defaultValue);

const WindowProvider = ({ children } : { children: ReactNode }) => {
  const [modalState, setModalState] = useState<string | undefined>(undefined);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [statusCode, setstatusCode ] = useState<number | undefined>(undefined);

  const handleModalState = (state: string | undefined) => {
    setModalState(state)
  }

  const handleLoadingState = (state: boolean) => {
    setLoadingState(state)
  }

  async function useCallHandler<T>(args: T, func: (args: T) => Promise<AxiosResponse | undefined>): Promise<AxiosResponse | undefined> {
    setLoadingState(true);
    console.log(func)
    const res = await func(args);
    console.log(res);
    if (res !== undefined) {
      setstatusCode(res.status);
    }
    setTimeout(() => {
      setLoadingState(false);
    }, 500)

    return res;
  }

  const handleStatusCode = (code: number | undefined) => {
    setstatusCode(code)
  }

  const contextValue = {
    modalState,
    handleModalState,
    loadingState,
    handleLoadingState,
    useCallHandler,
    statusCode,
    handleStatusCode
  }

  return (
    <>
      <WindowContext.Provider value={contextValue}>
        {children}
      </WindowContext.Provider>
    </>
  )
}
export { WindowContext, WindowProvider };
