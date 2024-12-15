import { Link } from 'react-router-dom'
import { FaBookOpen } from "react-icons/fa";
import { useState } from 'react';
import { FaRegAddressBook } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";

const Aside = () => {
    const [activeLink, setActiveLink] = useState('course');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='w-[100%] h-full flex flex-col gap-3 items-start px-2 justify-center text-white'>
            <div className='w-full h-[60px] flex items-center justify-start gap-4'>
                <div className='w-[50px]  h-[70px]'><img className='w-full h-full object-contain' src="./src/assets/logo/logo.png" alt="" /></div>
                <div ><h4 className='font-bold tracking-widest text-[16px] pt-2'>EDROH</h4></div>
                <div className='flex items-end justify-end'><h4 className='font-bold tracking-wide text-[18px] pt-3'><FaBookOpen /></h4></div>
            </div>
            <div className=' w-full h-full flex flex-col items-start justify-start gap-4 mt-2'>

                <div className={`w-full h-[40px] flex items-center justify-start px-4 gap-8  ${activeLink === 'course' ? 'bg-gray-800' : ''}`} onclick={() => handleLinkClick('course')} >
                    <div><h4 className='text-[18px] tracking-wide font-bold'><FaBookOpen /></h4></div>
                    <div><Link to="/course"><h3 className='text-[16px] tracking-wide font-semibold'>Course</h3></Link></div>
                </div>
                <div className={`w-full h-[40px] flex items-center justify-start px-4 gap-8  ${activeLink === 'billing' ? 'bg-gray-800' : ''}`} onclick={() => handleLinkClick('billing')}>
                    <div><h4 className='text-[18px] tracking-wide font-bold'><FaRegAddressBook /></h4></div>
                    <div><Link to="/billing"><h3 className='text-[16px] tracking-wide font-semibold'>Billing</h3></Link></div>
                </div>
                <div className={`w-full h-[40px] flex items-center justify-start px-4 gap-8  ${activeLink === 'profile' ? 'bg-gray-800' : ''}`} onclick={() => handleLinkClick('profile')}>
                    <div><h4 className='text-[18px] tracking-wide font-extrabold'><CiUser /></h4></div>
                    <div><Link to="/profile"><h3 className='text-[16px] tracking-wide font-semibold'>Profile</h3></Link></div>
                </div>
                <div className={`w-full h-[40px] flex items-center justify-start px-4 gap-8  ${activeLink === 'settings' ? 'bg-gray-800' : ''}`} onclick={() => handleLinkClick('settings')}>
                    <div><h4 className='text-[18px] tracking-wide font-bold'><IoMdSettings /></h4></div>
                    <div><Link to="/settings"><h3 className='text-[16px] tracking-wide font-semibold'>Settiing</h3></Link></div>
                </div>

            </div>
        </div>
    )
}

export default Aside
