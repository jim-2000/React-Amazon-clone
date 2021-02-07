import React, { createContext, useContext, useReducer } from 'react';

// selector our 



// prepare the date layer 
export const StateContex = createContext()

// wrap our app and provide the datalayer 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContex.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContex.Provider>
);

//
export const UseStatevalue = () => useContext(StateContex)

