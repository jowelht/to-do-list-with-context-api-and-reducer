/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import  { ThemeContext } from "../contexts/theme-context"
const darkTheme = "dark";
const ThemeDefault = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <nav className="menu">
            
            <input type="checkbox"
                onClick={toggleTheme} 
                defaultChecked={theme === darkTheme}
            />
        </nav>
        
    )
}

export default ThemeDefault