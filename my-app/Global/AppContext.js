import React from "react";
const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const ip = '192.168.0.103'
    return(
        <AppContext.Provider value={ip}>
              {children}
        </AppContext.Provider>
    )
}  

export {AppContext,AppProvider}