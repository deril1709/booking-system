import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/badminton.svg'
import { UserContext } from './UserContext'
import { useContext } from 'react'


function Header() {
    const { user } = useContext(UserContext)
    return (
        <div>
            <header className=' flex justify-between'>
                <Link to={'/'} className=" items-center gap-1 flex">
                    <img src={Logo} alt="" className='w-10 h-w-10' />
                    <span className="font-semibold text-xl">Damai</span>
                </Link>
                <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-sm shadow-blue-500'>
                    <div>Jl.Damai</div>
                    <div>Lr.1</div>
                    <div>Unhas</div>
                    <button className='bg-blue-400 text-white rounded-full p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <Link to={user ? '/account' : '/login'} className='flex items-center border border-gray-300 shadow-sm shadow-blue-500  gap-2 rounded-full py-2 px-2'>
                    {!!user && (
                        <div className='rounded-full flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                {user.name}
                            </div>
                        </div>
                    )}
                    {!user && (
                        <div className='rounded-full flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                Sign In
                            </div>
                        </div>
                    )}
                </Link>
            </header>
        </div>
    )
}

export default Header