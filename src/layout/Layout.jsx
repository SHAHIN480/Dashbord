import Aside from '@/pages/Aside'
import Footer from '@/pages/Footer'
import Header from '@/pages/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex items-start justify-start'>
            <div className='w-[17%] h-[100svh] bg-gray-950'>  <Aside />
            </div>
            <div className='w-[83%] h-[100svh] bg-gray-800 flex flex-col items-start justify-start py-3'>
                <Header />
                <Outlet />
                <div>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Layout
