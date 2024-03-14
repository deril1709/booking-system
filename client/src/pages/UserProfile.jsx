import React from 'react'

function UserProfile() {
    return (
        <div className='text-center max-w-xs mx-auto'>
            Logged in as {user.name} ({user.email}) <br />
            <button onClick={logout} className='bg-blue-400 max-w-sm mt-4 login'>Log out</button>
        </div>
    )
}

export default UserProfile