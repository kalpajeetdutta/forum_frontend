import React from 'react'
import Feedpost from './feedcomponents/Feedpost'
import Searchbar from './feedcomponents/Searchbar'

const Feed = () => {
  return (
    <div className='flex relative md:px-[22%] justify-center pt-2'>

       <div className=' hidden md:block fixed top-0 left-0 bottom-0 bg-slate-400 w-[25%]'>
        commmunity
       </div>
       <div className='w-full flex flex-col px-[6%] sm:px-[10%]'>
        <div>
          <Searchbar/>
        </div>
        <div><Feedpost/></div>
       </div>
       <div className='hidden fixed md:block top-0 right-0 bottom-0 bg-slate-400 w-[25%]'>
        profile
       </div>
    </div>
  )
}

export default Feed