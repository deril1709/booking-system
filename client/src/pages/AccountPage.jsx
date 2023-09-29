import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AccountPage() {
    const { ready, user } = useContext(UserContext);

    if (!ready) {
        return <div>Loading...</div>
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <div>
            <nav className='w-full justify-center mt-8 flex gap-4 '>
                <Link className='p-2 px-6 text-white bg-blue-400' to={'/account'}>My profile</Link>
                <Link className='p-2 px-6 ' to={'account/bookings'}>my booking</Link>
                <Link className='p-2 px-6 ' to={'account/lapangan'}>Daftar Lapangan</Link>
            </nav>
        </div>
    )
}

export default AccountPage