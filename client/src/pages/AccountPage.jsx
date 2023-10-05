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
        let classes = 'py-2 px-6';
        if (type === subpage) {
            classes += ' text-white bg-blue-400';
        }
        return classes;
    }
    return (
        <div>
            <nav className='w-full flex justify-center mt-8  gap-2 '>
                <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>Booking List</Link>
                <Link className={linkClasses('lapangan')} to={'/account/lapangan'}>Lapangan</Link>
            </nav>
            {subpage === 'profile' && (
                <div className='text-center max-w-xs mx-auto'>
                    Logged in as {user.name}({user.email}) <br />
                    <button onClick={logout} className='bg-blue-400 max-w-sm mt-4'>Log out</button>
                </div>
            )}
            {subpage === 'lapangan' && (
                <PlacesPages />
            )}
        </div>
    )
}

export default AccountPage;