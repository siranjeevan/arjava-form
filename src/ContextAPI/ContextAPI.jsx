import { createContext, useContext, useRef } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const formRef = useRef(null);
  return (
    <DataContext.Provider value={{ formRef }}>
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  return useContext(DataContext);
}
