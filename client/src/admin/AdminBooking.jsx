import React from 'react'
import Sidebar from '../components/Sidebar'

function AdminBooking() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                booking
            </main>
        </div>
    )
}

export default AdminBooking