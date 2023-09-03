import React, { useEffect } from 'react'
import {AiFillEyeInvisible,AiFillEye,AiFillApple, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react';
import {FcGoogle} from 'react-icons/fc'

const Login = () => {


 
    const[open,setOpen] = useState(false);
    const[width,setWidth] = useState(null);
    useEffect(()=>{
      setWidth( window.innerWidth)
     
    },[])

  return (
    <div>
        <div className='flex h-screen md:px-[10%] md:items-center'>
          <div className='flex flex-row w-full justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 md:justify-end '>
            <div className='flex justify-center items-center bg-slate-300 w-[80%] relative p-[5%] rounded-2xl sm:p-[8%]  md:w-3/5 md:rounded-none'>

                <form className='flex-1 lg:max-w-[400px]'>
                    <h1 className='text-xl font-bold mb-9 '>Welcome</h1>
                    <h1 className='mb-[2px] text-sm md:text-base ' >User Name</h1>
        <input type='text' className='outline-none bg-transparent border-b-2 border-[#4F4747] w-full mb-[24px] '/>
        <h1 className='mb-[2px] text-sm md:text-base ' >Password</h1>
        <div className='relative'>
             <input type={open?'text':'password'} className='outline-none bg-transparent border-b-2 border-[#4F4747] w-full mb-[24px] '/>
           <div className='absolute top-1 right-1'>
            {
                open?<AiFillEyeInvisible size={18} onClick={()=>{setOpen(!open)}} className='cursor-pointer'/>:<AiFillEye size={18} onClick={()=>{setOpen(!open)}} className='cursor-pointer'/>
            }
           </div>
            <h1 className='text-xs absolute right-1 bottom-1'><a className='cursor-pointer'>forgot Password?</a></h1>
        </div>
        <button className='mt-[8%] bg-gradient-to-r from-blue-400 via-blue-600 to-purple-700 w-full rounded-2xl py-[15px] text-white font-semibold text-center'>Log In</button>
             <div className=' my-5 flex items-center '>
              <div className='flex-1 bg-slate-500 h-[0.5px]'></div>
              <div className=' text-slate-500 mx-2'>or</div>
              <div className='flex-1 bg-slate-500 h-[0.5px]'></div>
              </div>        
              <div className='flex justify-evenly'>
                        <button className='flex items-center bg-white p-2 lg:py-2 lg:px-5 rounded-md cursor-pointer'>
                          <FcGoogle size={width<=640?18:24}/>
                          <div className='ml-2 text-[10px] lg:text-xs'>
                            Sign in with Google
                          </div>
                        </button>
                        <button className='flex items-center text-white p-2 bg-black lg:py-2 lg:px-5 rounded-md cursor-pointer'>
                          <AiFillApple size={width<=640?18:24} color='white'/>
                          <div className='ml-2 text-[10px] lg:text-xs'>
                            Sign in with Apple
                          </div>
                        </button>
                        
                     </div>
                </form>



            </div>
          </div>
        </div>
    </div>
  )
}

export default Login