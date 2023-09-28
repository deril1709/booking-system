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
            <nav>
                <Link to={'/account'}>My profile</Link>
                <Link to={'account/bookings'}>my booking</Link>
                <Link to={'account/lapangan'}>Daftar Lapangan</Link>
            </nav>
        </div>
    )
}

export default AccountPage