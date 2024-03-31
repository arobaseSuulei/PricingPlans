import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './font.css'


const items=[
  {
    name:'Grace',
    app:'Fleet UI kit',
    hour:'1'
  }
]

export default function comment(){




  return(
    <>

  <div id='principal' className=' p-12 border gap-3 flex justify-between  items-center gap-8  rounded-lg  '> 
    <div id='element' className=' w-60 rounded-lg  text-left flex flex-col gap-3  p-6 border'> 
    <p className='text-xs'>website projects at <br /> <b className='text-2xl'>$7000</b> </p>
    
    <hr className='mb-6' />
    <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70   '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>

    <button className='p-3 text-xs rounded-lg bg-black text-white mt-12'>Book call</button>
    </div>
    <div id='element' className=' w-60 rounded-lg  text-left flex flex-col gap-3  p-6 border'>

    <p className='text-xs'>SAAS projects at <br /> <b className='text-2xl text-orange-500'>$8000</b> </p>
    
    <hr className='mb-6' />
    <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70   '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>
    <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>

    <button className='p-3 text-xs rounded-lg bg-orange-600 text-white mt-12'>Book call</button>


    </div>



    <div id='element3' className=' w-60 rounded-lg  text-left flex flex-col gap-3  p-6 border border-black'>

        <p className='text-xs'>website + SAAS projects at <br /> <b className='text-2xl'>$10,000</b> </p>

        <hr className='mb-6' />
        <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>
        <p className='text-xs opacity-70   '> <b className='text-orange-500'>+</b>  complete Website design </p>
        <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
        <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
        <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
        <p className='text-xs opacity-70 '> <b className='text-orange-500'>+</b>  complete Website design </p>
        <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>
        <p className='text-xs opacity-70'> <b className='text-orange-500'>+</b>  complete Website design </p>

        <button className='p-3 text-xs rounded-lg bg-black text-white mt-12'>Book call</button>


</div>

       
  </div>
 
  
  </>
  );
  
}


