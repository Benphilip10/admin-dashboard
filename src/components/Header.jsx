import React from 'react'

const Header = (props) => {
  return (
    <div className='mb-10'>
    <p className='text-gray-400 text-lg'>
      {props.category}
    </p>
    <p className='text-slate-900 text-3xl font-bold tracking-tight'>
      {props.title}
    </p>
    
    </div>
  )
}

export default Header