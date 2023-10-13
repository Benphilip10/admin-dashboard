import React from 'react'

const ChartsHeader = (props) => {
  return (
    <div className='mb-10'>
    <p className='text-gray-400 text-lg'>
      {props.category}
    </p>
    <p className='text-slate-900 text-3xl font-bold tracking-tight dark:text-gray-200'>
      {props.title}
    </p>
    
    </div>
  )
}

export default ChartsHeader