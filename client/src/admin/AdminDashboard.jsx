import React from 'react'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import Date from '../components/Date'

function AdminDashboard() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <Date />
            </main>
        </div>
    )
}

export default AdminDashboard