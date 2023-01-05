/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../components/logo'
import ThemeDefault from '../components/theme-defult'

export default function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="row">
                <Logo/>
                
                <ThemeDefault/>
            </div>
        </div>
    </header>
  )
}
