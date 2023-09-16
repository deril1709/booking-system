import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className=' flex justify-between'>
                <a href="" className=" items-center gap-1 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                    </svg>
                    <span className="font-semibold text-xl">This is logo</span>
                </a>
                <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-sm shadow-blue-500'>
                    <div>Home</div>
                    <div className='border-l border-gray-300'></div>
                    <div>Lapangan</div>
                    <div className='border-l border-gray-300'></div>
                    <button className='bg-blue-400 text-white rounded-full p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <Link to={'/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4'>
                    <p>sign in</p>
                    <div className='rounded-full text-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </Link>
            </header>
        </div>
    )
}

export default Header