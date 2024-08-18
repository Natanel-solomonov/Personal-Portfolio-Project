import React, {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export const useTheme = ()=> useContext(ThemeContext)


export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState(
        ()=> localStorage.getItem('theme')||'light'
    );
    
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        const root = document.documentElement;
        if (theme === 'light') {
            root.style.setProperty('--text-color-dark', 'black');
        } else {
            root.style.setProperty('--text-color-dark', 'white');
        }
    }, [theme]);
    
    const toggleTheme = ()=>{
       
    setTheme((prevTheme)=> (prevTheme=== 'light'? 'dark': 'light'));
   }

   return (
    <ThemeContext.Provider value ={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
   );
};