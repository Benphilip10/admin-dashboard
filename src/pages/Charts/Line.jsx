import React from 'react';
 
import { LineChart, ChartsHeader } from '../../components';


import { useStateContext } from '../../contexts/ContextProvider';

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      
      <ChartsHeader
        title ="Inflation Rate"
      category =" Line Chart"
      />
  
      <div className='w-full'>
        <LineChart/>
      </div>
    </div>
  )
}

export default Line