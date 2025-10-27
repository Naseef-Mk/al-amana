import React from 'react'

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`button ${variant} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button