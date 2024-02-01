import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import PlacesPages from './PlacesPages';

function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect('/');
    }

    if (!ready) {
        return <div>Loading...</div>
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />;
    }
    if (redirect) {
        return <Navigate to={redirect} />;
    }



    function linkClasses(type = null) {
        let classes = 'inline-flex gap-1 py-2 gap-2 px-4';
        if (type === subpage) {
            classes += ' text-white bg-blue-400 rounded';
        } else {
            classes += ' bg-gray-200'
        }
        return classes;
    }
    return (
        <div>
            <nav className='w-full flex justify-center mt-8  gap-2 mb-8'>
                <Link className={linkClasses('profile')} to={'/account'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    My Profile
                </Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Booking List
                </Link>
                <Link className={linkClasses('lapangan')} to={'/account/lapangan'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Lapangan
                </Link>
            </nav>
            {subpage === 'profile' && (
                <div className='text-center max-w-xs mx-auto'>
                    Logged in as {user.name} ({user.email}) <br />
                    <button onClick={logout} className='bg-blue-400 max-w-sm mt-4 login'>Log out</button>
                </div>
            )}
            {subpage === 'lapangan' && (
                <PlacesPages />
            )}
        </div>
    )
}

export default AccountPage;