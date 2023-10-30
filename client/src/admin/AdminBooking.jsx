import React from 'react'
import Sidebar from '../components/Sidebar'
import BookingList from '../components/BookingList'

function AdminBooking() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <BookingList />
            </main>
        </div>
    )
}

export default AdminBooking