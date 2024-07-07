"use client"
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [UrlData, setUrlData] = useState(null);
  
    return (
      <DataContext.Provider value={{ UrlData, setUrlData }}>
        {children}
      </DataContext.Provider>
    );
  };

export const useData = () => useContext(DataContext);