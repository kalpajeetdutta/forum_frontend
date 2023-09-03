import React, { useState } from 'react'
import OtpInput from 'react-otp-input';


const Otp=()=>{
  const [otp, setOtp] = useState('');
return (
    <div>
        <div className=' flex md:px-[10%] h-screen  md:items-center '>
            <div className='flex flex-row w-full   md:justify-end justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 lg:max-w-[1100px]'>
                <div className='flex justify-center items-center bg-slate-300 w-[80%] relative p-[5%] rounded-2xl sm:p-[10%]  md:w-3/5 md:rounded-none'>
                  <form className='flex-1 lg:max-w-[460px]'>
                    <h1 className='font-bold text-xl md:text-2xl mb-9 text-center' >OTP Verification</h1>
                    <div>
                         <p className='text-center'>We will send you a one time password on this Email <span className='font-semibold'>abc@gmail.com</span></p>
                    </div>
                 
                    <div className='flex justify-center gap-2 mt-5 '>
                    <OtpInput
                    inputType='tel'

               value={otp}
                onChange={setOtp}
                 
               numInputs={6}
               renderSeparator={<span className='mx-2'></span>}
               inputStyle={{width: 32, height: 32,outlineColor:'#89CFF0'
              }}
               renderInput={(props) => <input {...props} className='rounded' />}
                  />
                    </div>
                    <h1 className='underline text-center text-sm cursor-pointer p-1'>Resend OTP</h1>
                    <button className='mt-[8%] bg-gradient-to-r from-blue-400 via-blue-600 to-purple-700 w-full rounded-2xl py-[15px] text-white font-semibold text-center'>Verify</button>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Otp