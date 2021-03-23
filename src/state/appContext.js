import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

export const AppDataContext = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

const useAppData = () => useContext(AppContext);

export default useAppData;
