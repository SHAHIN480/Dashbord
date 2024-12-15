import React from 'react'

const Course = () => {
  return (
    <div className='w-full h-full flex flex-col  items-start justify-start px-5 gap-4'>
      <div className='pt-4'>
        <h3 className='text-white text-[26px] tracking-widest font-bold'>My Courses</h3>
        <p className='font-semibold tracking-wide text-[16px] text-white/80'>View Your Enrolled Courses</p>
      </div>
      <div className='mt-3 w-full flex items-center justify-between gap-2'>
        <div className='w-[85%] h-[45px] '>
          <input className='w-full h-full rounded-md bg-gray-950 px-4 outline-none text-white tracking-widest text-[14px] font-semibold' type="text" name="text" id="" placeholder='Search Your Course' />
        </div>
        <div className='w-[14%]  bg-gray-950 h-[45px] text-white tracking-wide text-[14px] font-semibold rounded-md px-2 flex items-center justify-between'>
          <select className=' bg-gray-950 w-full h-[45px] ' >
            <option value="N/A">Category</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <div className='flex  items-center justify-center gap-4'>
        <div className='w-[300px] h-full flex flex-col items-start gap-4 justify-start rounded-md bg-gray-950'>
          <div className='w-[300px] h-[180px]'><img className='w-full h-full rounded-t-md ' src="./src/assets/image/women.jpg" alt="" /></div>
          <div className='px-3'><h1 className='font-semibold tracking-wide text-[18px] text-white'>TESTING COURSE: <br /> Lorem ipsum dolor sit amet </h1></div>
          <div className='px-3 flex items-center justify-center gap-3'>
            <div className=' w-[30px] h-[30px] rounded-full'><img src="./src/assets/image/m.png" alt="" /></div>
            <span className='font-semibold tracking-wide text-[16px] text-white/90'>majestic glue</span>
          </div>
          <div className='w-full h-full py-2 px-3 flex items-center justify-between text-white '>
            <h4 className='bg-gray-800 rounded-full font-semibold tracking-wide text-[14px] text-white/90 px-3 py-2 font-sans'>Artificial intelligence</h4>
            <p className='font-semibold tracking-wide text-[16px]'>$15.00</p>
          </div>
        </div>

        <div className='w-[300px] h-full flex flex-col items-start gap-4 justify-start rounded-md bg-gray-950'>
          <div className='w-[300px] h-[180px]'><img className='w-full h-full rounded-t-md ' src="./src/assets/image/women.jpg" alt="" /></div>
          <div className='px-3'><h1 className='font-semibold tracking-wide text-[18px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </h1></div>
          <div className='px-3 flex items-center justify-center gap-3'>
            <div className=' w-[30px] h-[30px] rounded-full'><img src="./src/assets/image/m.png" alt="" /></div>
            <span className='font-semibold tracking-wide text-[16px] text-white/90'>majestic glue</span>
          </div>
          <div className='w-full h-full py-2 px-3 flex items-center justify-between text-white '>
            <h4 className='bg-gray-800 rounded-full font-semibold tracking-wide text-[14px] text-white/90 px-3 py-2 font-sans'>Artificial intelligence</h4>
            <p className='font-semibold tracking-wide text-[16px]'>$15.00</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Course
