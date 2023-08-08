import React from 'react'
import archanaResume from '../image/archana.pdf'
import '../index.css'



const Cv = () => {
  return (


    <div className=''>

    <button className='hover:bg-[white] hover:text-black border border-white duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white rounded shadow-lg'><a href={archanaResume} download alt='resume'  className=' '>Download CV</a></button>
    <button className='hover:bg-[white] hover:text-black border border-white duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white rounded shadow-lg'><a href='#contact' className=' '> Contact Me! </a></button>

    </div>


  )
}

export default Cv