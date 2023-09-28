import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom';

function AccountPage() {
    const { user } = useContext(UserContext);
    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <div>AccountPage</div>
    )
}

export default AccountPage