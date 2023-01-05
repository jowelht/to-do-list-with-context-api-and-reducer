import React, { createContext, useReducer } from 'react'

const ThemeContext = createContext()
const lightTheme = "light";
const darkTheme = "dark";
const reducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_THEME": 
            localStorage.setItem (
                'theme', state.theme === lightTheme ? darkTheme : lightTheme
            )
            return {
                theme: state.theme === lightTheme ? darkTheme : lightTheme
            }
        default: 
            return state
    }

}

const getInitialTheme = () => {
    const theme = localStorage.getItem('theme')
    //const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(theme) {
        return theme
    }
    // if(preferDark){
    //     return darkTheme;
    // }
    return lightTheme
} 

const initialState = {
    theme: getInitialTheme()
}

const ThemeContextProvider = ({children}) => {
    const [initial, dispatch] = useReducer(reducer, initialState)
    const value = {
        theme: initial.theme,
        toggleTheme: () => dispatch({type: "TOGGLE_THEME"})
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext }
export default ThemeContextProvider 