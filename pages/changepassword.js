import React from 'react'
import { useState } from 'react';
import {AiFillEyeInvisible,AiFillEye,AiFillApple} from 'react-icons/ai'

const Changepassword = () => {
  const[cpOpen,setCpOpen] = useState(false);
  return (
    <div>
      <div className=' flex md:px-[10%] h-screen  md:items-center '>
        <div className='flex flex-row w-full   md:justify-end justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 lg:max-w-[1100px]'>
          <div  className='flex justify-center items-center bg-slate-300 w-[80%] relative p-[5%] rounded-2xl sm:p-[10%]  md:w-3/5 md:rounded-none '>
           <form className='flex-1 lg:max-w-[400px] '>
           <h1 className='mb-[2px] text-sm md:text-base '>New Password</h1>
        <div className='relative mb-[24px] '>
        <input type={cpOpen? 'text': 'password'} className='outline-none bg-transparent border-b-2 border-[#4F4747] w-full '/>
        <div className='absolute top-1 right-1'>
        {
         cpOpen?<AiFillEyeInvisible size={18} onClick={()=>setCpOpen(!cpOpen)} / >:<AiFillEye size={18} onClick={()=>setCpOpen(!cpOpen)}/>
        }
      </div>
          </div>
          <h1 className='mb-[2px] text-sm md:text-base '>Confirm Password</h1>
          <div className='relative mb-[24px] '>
          <input type={cpOpen? 'text': 'password'} className='outline-none bg-transparent border-b-2 border-[#4F4747] w-full '/>
          <div className='absolute top-1 right-1'>
          {
           cpOpen?<AiFillEyeInvisible size={18} onClick={()=>setCpOpen(!cpOpen)} / >:<AiFillEye size={18} onClick={()=>setCpOpen(!cpOpen)}/>
          }
        </div>
            </div>
            <button className='mt-[8%] bg-gradient-to-r from-blue-400 via-blue-600 to-purple-700 w-full rounded-2xl py-[15px] text-white font-semibold text-center'>Change Password</button>
           </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Changepassword