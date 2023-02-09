import React,{createContext,useContext,useReducer} from 'react';

//preparing data layer

export const stateContext  = createContext();

export const StateProvider = ({reducer,initialState,children}) =>(
    <stateContext.Provider value={useReducer(reducer,
    initialState)}>{children}</stateContext.Provider>
);

export const  useStateValue = () => useContext(stateContext);