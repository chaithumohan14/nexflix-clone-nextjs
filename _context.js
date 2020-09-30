import { createContext, useContext, useReducer } from "react";

const RawState = createContext();

export const Provider = ({ initialState, reducer, children }) => (
  <RawState.Provider value={useReducer(reducer, initialState)}>
    {children}
  </RawState.Provider>
);

export const Store = () => useContext(RawState);
