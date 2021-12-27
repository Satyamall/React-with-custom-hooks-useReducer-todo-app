import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const initstate={
    todo:[],
    isLoading: true,
    isError: false
}

export default function AppContextProvider({children}){
     
    const [state,dispatch]=useReducer(reducer,initstate);
     
    return (
        <AppContext.Provider value={[state,dispatch]}>
            {children}
        </AppContext.Provider>
    )
}