import React,{useContext, useReducer } from "react"

export const myContext = React.createContext();

// usereducer
const initialValue={
    toggle: false,
}
export const InitialFun=(state,action)=>{
    if (action.type==='toggle') {
        return{toggle:!state.toggle}
    }
    if (action.type==='off') {
        return{toggle:false}
    }
    return state
}
export const ContextProvider =({children})=>{
    const [context, dispatch ]=useReducer(InitialFun,initialValue)
    return(<myContext.Provider value={{...context, dispatch}}>
        {children}
    </myContext.Provider>)
}

export const useGlobalContext=()=>useContext(myContext);

// import { useGlobalContext } from '../myContext/context';
// const value = useGlobalContext();
// const { dispatch, toggle } = value;