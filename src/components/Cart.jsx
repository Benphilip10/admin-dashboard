import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {

  const {setIsClicked, initialState, currentColor} =  useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
        <div className='h-screen dark:text-gray-200 transition-all duration-100 ease-in-out bg-white dark:[484B52] w-400 float-right dark:bg-[#42464D]'>

        <div className='flex justify-between p-6'>
            <p className='font-semibold text-lg p-2'> Shopping Cart </p>
            <button
            className='text-2xl p-2 hover:drop-shadow-xl hover:bg-light-gray'
            type='button'
              style={{borderRadius:'50%', color:'rgb(153, 171, 180'}}
              onClick={(clicked) => {
                setIsClicked({...initialState, [clicked]:false})
                }}
            >
            <MdOutlineCancel/>
            </button>
        </div>

        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-10 border-b-1 border-color dark:border-gray-600 p-2 ml-5">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-2 border-color rounded">
                      <p className="p-2 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2 border-color dark:border-gray-600 text-green-600 border-x-1">0</p>
                      <p className="p-2 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='p-6 mx-2'>
          <div className='flex justify-between mb-2'>
            <p className='text-gray-500 dark:text-gray-200'>Subtotal</p>
            <p className='font-bold'>$700</p>
          </div>

          <div className='flex justify-between'>
            <p className='text-gray-500 dark:text-gray-200'>Total</p>
            <p className='font-bold'>$700</p>
          </div>
        </div>
        
        <div className='px-7'>
        <Button
        color='white'
        text='Place Order'
        bgColor={currentColor}
        borderRadius='10px'
        width='full'
        />
        </div>
        </div>
    </div>
  )
}

export default Cart