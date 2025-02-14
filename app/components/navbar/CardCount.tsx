"use client"
import cartContext from '@/hooks/cartContext'
import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'

const CardCount = () => {
  const{cartPrdcts} =cartContext();
  return (
    <div className='hidden md:flex relative'  >
      <MdShoppingBasket size={25}/>
      <div className='absolute -top-1 -right-2 text-sm bg-orange-900 w-4 h-4 flex items-center justify-center rounded-full'>{cartPrdcts?.length}</div>
    </div>
  )
}

export default CardCount