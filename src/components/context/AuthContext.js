import {createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    const[auth, setAuth]=useState('')
    
    const values = {auth, setAuth}

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext