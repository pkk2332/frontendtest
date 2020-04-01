import React, {createContext, useReducer, useContext,useMemo} from "react";
import Reducer from './reducer'


const initialState = {
    user:JSON.parse( localStorage.getItem('userdata'))|| null,
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={useMemo(() => [state, dispatch], [state])}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
export const useStore = ()=>useContext(Context)