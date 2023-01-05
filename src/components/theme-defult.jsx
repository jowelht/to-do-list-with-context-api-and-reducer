/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import  { ThemeContext } from "../contexts/theme-context"
const darkTheme = "dark";
const ThemeDefault = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <nav className="menu">
            <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <input type="checkbox"
                onClick={toggleTheme} 
                defaultChecked={theme === darkTheme}
            />
        </nav>
        
    )
}

export default ThemeDefault