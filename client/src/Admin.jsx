import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function Admin() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <Dashboard />
            </main>
        </div>
    )
}

export default Admin;