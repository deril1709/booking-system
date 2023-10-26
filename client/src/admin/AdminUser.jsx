import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Date from '../components/Date'
import Graph from '../components/Graph'

function AdminUser() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <Graph />
            </main>
        </div>
    )
}

export default AdminUser