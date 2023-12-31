import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size, width}) => {
  return (
    <div>
    <button
    type='button'
    style={{backgroundColor:bgColor, color, borderRadius}}
    className={`text-${size} p-3 w-${width} hover:drop-shadow-xl`}
    >
    {text}
    </button>
    
    </div>
  )
}

export default Button