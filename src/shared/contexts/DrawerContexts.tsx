import React, { useCallback, useContext, useState } from "react";

import { createContext } from "react";


interface IDrawerContextData{
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
}


 export const DrawerContext = createContext({} as IDrawerContextData)

 export const useDrawerContext=()=>{
     return useContext(DrawerContext)
 }

export const DrawerProvider: React.FC = ({children})=>{
    const [isDrawerOpen,setIsDraweOpen]=useState(false)

    const toggleDrawerOpen = useCallback(()=>{
        setIsDraweOpen(olDraweropen => !olDraweropen)
    },[])

    
    return(
        <DrawerContext.Provider value={{ isDrawerOpen,toggleDrawerOpen}}>           
               {children}
       </DrawerContext.Provider>

    )
}

