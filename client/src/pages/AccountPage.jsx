import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AccountPage() {
    const { ready, user } = useContext(UserContext);

    if (!ready) {
        return <div>Loading...</div>
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />;
    }


    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }


    function linkClasses(type = null) {
        let classes = 'py-2 px-6';
        if (type === subpage) {
            classes = 'py-2 px-6 text-white bg-blue-400 rounded-full';
        }
        return classes;
    }
    return (
        <div>
            <nav className='w-full flex justify-center mt-8  gap-2 '>
                <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Booking</Link>
                <Link className={linkClasses('lapangan')} to={'/account/lapangan'}>Lapangan</Link>
            </nav>
        </div>
    )
}

export default AccountPage;