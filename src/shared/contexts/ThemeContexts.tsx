import React, { useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from '@mui/material';
import { LightTheme, DarkTheme } from './../themes';
import { createContext } from "react";
import { Box } from "@mui/system";

interface IThemeContextData{
    themeName: 'light' | 'dark'
    toggleTheme: ()=>void
}


 const ThemeContext = createContext({} as IThemeContextData)

 export const useAppThemeContext=()=>{
     return useContext(ThemeContext)
 }

export const AppThemeProvider: React.FC = ({children})=>{
    const [themeName,setThemeName]=useState<'light' | 'dark'>('light')

    const toggleTheme = useCallback(()=>{
        setThemeName(oldTheme=> oldTheme === 'light' ? 'dark':'light')
    },[])

    const theme = useMemo(()=>{
        if(themeName === 'light')return LightTheme
        
        return DarkTheme
    },[themeName])
    
    return(
        <ThemeContext.Provider value={{themeName,toggleTheme}}>
             <ThemeProvider theme={theme}>
                 <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
               {children}
                 </Box>
            </ThemeProvider>
       </ThemeContext.Provider>

    )
}

