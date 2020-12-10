import React, {useContext, createContext, useReducer} from 'react';
// prepare the dataLayer
export const StateContext = createContext();
//wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from the data layer
export const useStateValue = () => useContext(StateContext);
