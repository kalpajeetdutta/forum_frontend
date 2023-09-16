import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Searchbar = () => {
  return (
    <div className='mb-2 p-1 flex border-2 rounded-2xl border-blue-300'>
      <input type='search' placeholder='Find your interest!' 
      className=" w-full outline-none after:content-['<AiOutlineSearch color='gray' />'] after:w-10"/>
     <AiOutlineSearch color='gray' size={20}/>
      
    </div>
  )
}

export default Searchbar