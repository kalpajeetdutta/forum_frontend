import React from 'react'
import {AiFillEyeInvisible,AiFillEye,AiFillApple} from 'react-icons/ai'
import { useState } from 'react'


const Signup = () => {

  const[open,setOpen] = useState(false);
  const[cpOpen,setCpOpen] = useState(false);


  //handel toggle
  const toggle = () =>{
    setOpen(!open)
  }
  return (
    <div className=''>
      <div className=' flex md:px-[10%] h-screen  md:items-center '>
       <div className='flex flex-row w-full   md:justify-end justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
    <div className='bg-[#01010100]  w-[80%] md:w-3/5 md:rounded-none rounded-2xl p-[5%] sm:p-[8%] lg:py-[6%] flex justify-center items-center relative  bg-[#f0f0f0] '>
      
      <form className=' flex-1 lg:max-w-[460px]'>
        <h1 className='font-bold text-xl md:text-2xl  mb-9'>Create Account</h1>
        <h1 className='mb-[2px] text-sm md:text-base ' >User Name</h1>
        <input type='text' className='outline-none bg-transparent border-b-2 border-[#4F4747] w-full mb-[24px] '/>
        <h1 className='mb-[2px] text-sm md:text-base'>Email</h1>
        <input type='text' className='outline-none bg-transparent border-b-2 border-[#4F4747] w-full mb-[24px] '/>
        <h1 className='mb-[2px] text-sm md:text-base '>Password</h1>
        <div className='relative  mb-[24px] '>
           <input type={(open?'text':'password')} className='outline-none bg-transparent border-b-2 border-[#4F4747] w-full '/>
      <div className='absolute top-1 right-1'>
        {
          (open === false)? <AiFillEye size={18} onClick={toggle}/>: <AiFillEyeInvisible size={18} onClick={toggle} />
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
         <button className='mt-[8%] bg-gradient-to-r from-blue-400 via-blue-600 to-purple-700 w-full rounded-2xl py-[15px] text-white font-semibold text-center'>Create Account</button>
        <p className='text-center mt-5 '>Already have an account? <a className='cursor-pointer  font-bold text-[#023047]'>Log in</a></p>
      </form>  
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signup