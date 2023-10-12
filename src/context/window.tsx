"use client"
import React, { createContext, ReactNode, useState } from 'react';

interface windowContext {
  modalState: {
    current: number,
    prev: number
  };
  handleModalState: ({ current, prev }: { current: number, prev: number }) => void;
  loadingState: boolean;
  useCallHandler: (func: () => Promise<void>) => void;
}

const defaultValue: windowContext = {
  modalState: {
    current: 0,
    prev: 0
  },
  handleModalState: () => {},
  loadingState: false,
  useCallHandler: () => {},

};

const WindowContext = createContext(defaultValue);

const WindowProvider = ({ children } : { children: ReactNode }) => {
  const [modalState, setModalState] = useState<{
    current: number,
    prev: number
  }>({current: 0, prev: 0});
  const [loadingState, setLoadingState] = useState<boolean>(false);


  const handleModalState = ({ current, prev }: { current: number, prev: number }) => {
    setModalState({
      current: current,
      prev: prev
    })
  }

  async function useCallHandler(func: () => Promise<void>) {
    setLoadingState(true);
    await func();
    setTimeout(() => {
      setLoadingState(false);
    }, 500)
  }

  const contextValue = {
    modalState,
    handleModalState,
    loadingState,
    useCallHandler
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
