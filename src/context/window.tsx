"use client"
import React, { createContext, ReactNode, useState } from 'react';

interface windowContext {
  modalState: {
    current: number,
    prev: number
  };
  handleModalState: ({ current, prev }: { current: number, prev: number }) => void;
}

const defaultValue: windowContext = {
  modalState: {
    current: 0,
    prev: 0
  },
  handleModalState: () => {}
};

const WindowContext = createContext(defaultValue);

const WindowProvider = ({ children } : { children: ReactNode }) => {
  const [modalState, setModalState] = useState<{
    current: number,
    prev: number
  }>({current: 0, prev: 0});

  const handleModalState = ({ current, prev }: { current: number, prev: number }) => {
    setModalState({
      current: current,
      prev: prev
    })
  }

  const contextValue = {
    modalState,
    handleModalState
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
