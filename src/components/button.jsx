import React from 'react'

const Button = ({children, classNames, onClick}) => {
  return (
    <button onClick={onClick} type="button" className={classNames}>
        {children}
    </button>
  )
}

export default Button