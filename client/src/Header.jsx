import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/icons/badminton.svg';
import { UserContext } from './UserContext';
import { useContext } from 'react';

function Header() {
    const { user } = useContext(UserContext);

    return (
        <div className=''>
            <header className='flex flex-row md:flex-row sm:w-full md:w-full items-center justify-between px-4 py-2 md:px-8 md:py-4'>
                <Link to={'/'} className="flex items-center gap-1">
                    <img src={Logo} alt="" className='w-10 h-10' />
                    <span className="font-semibold text-xl">Damai</span>
                </Link>
                <div className=' flex-col md:flex-row gap-2 hidden md:flex md:w-50 md:gap-4 border border-gray-300 rounded-full py-2 px-4 shadow-sm shadow-blue-500 mt-4 md:mt-0 '>
                    <div>Jl.Damai</div>
                    <div>Lr.1</div>
                    <div>Unhas</div>
                    <a href={'https://www.google.com/maps/place/Lapangan+Bulutangkis+Damai/@-5.1302029,119.4939794,17z/data=!4m8!3m7!1s0x2dbefdb79dac8719:0xae0fa332867d9268!8m2!3d-5.1302029!4d119.4939794!9m1!1b1!16s%2Fg%2F11js8ntvlh?entry=ttu'}>
                        <button className='bg-blue-400 text-white rounded-full p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </a>
                </div>
                <Link to={user ? '/account' : '/login'} className='flex items-center gap-2 border border-gray-300 shadow-sm shadow-blue-500 rounded-full py-2 px-2 mt-4 md:mt-0'>
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
    );
}

export default Header;
