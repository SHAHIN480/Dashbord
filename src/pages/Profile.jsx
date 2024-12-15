import { FaUser } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const Profile = () => {
  return (
    <div className='w-full h-full flex flex-col  items-start justify-start px-5 gap-4'>
      <div className='pt-4'>
        <h3 className='text-white text-[26px] tracking-widest font-bold'>Profile</h3>
        <p className='font-semibold tracking-wide text-[16px] text-white/80'>View Your Your profile</p>
      </div>
      <div className='flex  items-center justify-center '>
        <div className='bg-gray-900 opacity-100 w-[270px] h-[400px]  rounded-l-lg py-3'>
          <div className='flex-col items-center justify-center pl-8'>
            <h3 className='text-white text-[22px] tracking-widest font-semibold'>Account</h3>
            <p className='text-white tracking-wide font-semibold'>Manage your account Info</p>
          </div>
          <div className="mt-6 px-6 flex-col items-center justify-center ">
            <div className=" w-[220px] h-[40px] rounded-lg tracking-wider font-medium bg-gray-800 flex items-center justify-start px-6 gap-2 text-white"><span><FaUser /></span> <h4>Profile</h4> </div>
            <div className=" mt-2 w-[220px] h-[40px] rounded-lg tracking-wider font-medium flex items-center justify-start px-6 gap-2 text-white"><span><MdSecurity /></span> <h4>Security</h4> </div>
          </div>
        </div>
        <div className='absulate top-0 bottom-0 right-3 flex flex-col items-start justify-start gap-6 bg-gray-950 w-[650px] h-[400px] rounded-r-lg px-4 py-4'>
          <div className='flex flex-col items-start justify-center '>
            <h3 className='text-white text-[20px] tracking-widest font-semibold'> Profile Detalis</h3>
          </div>
          <div className="text-white flex  items-center justify-between w-full  h-[75px] border-t-[1px] px-2">
            <div><h4>Profile</h4></div>
            <div className="flex items-center justify-center gap-2">
              <span className="flex items-center justify-center w-[35px] h-[35px] bg-blue-500 text-white  rounded-full"><FaRegCircleUser /></span>
              <h4>some dumb</h4>
            </div>
            <div>
              <h4>Update Profile</h4>
            </div>
          </div>
          <div className="text-white flex  items-center justify-between w-full  h-[75px] border-t-[1px] px-2">
            <div><h4 className="text-white text-[16px] tracking-wider font-semibold">Email Address</h4></div>
            <div className="px-2 flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 ">
                <span className="text-white text-[16px] tracking-wide mt-4">sahin@gamail.com</span> <button className="mt-4 w-[70px] h-[25px] border-[1px] rounded-md text-[14px]">Primary</button>
              </div>
              <div className="flex items-center justify-start gap-2">
                <span className="text-[14px]"><FaPlus /></span>
                <h5 className="text-white text-[16px] tracking-wide "> Add email Address</h5>
              </div>
            </div>
            <div className="flex items-center  justify-center">
              <button><HiDotsHorizontal /></button>
            </div>
          </div>
          <div className="text-white flex  items-center justify-between w-full  h-[75px] border-t-[1px] px-2">
            <div><h4 className="text-white text-[16px] tracking-wider font-semibold">Connected Account</h4></div>
            <div className="px-2 flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 ">
                <span className="text-[14px]"><FaPlus /></span>  <span className="text-white text-[16px] tracking-wide ">Connect account</span>
              </div>
            </div>
            <div className="flex items-center  justify-center">

            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Profile
