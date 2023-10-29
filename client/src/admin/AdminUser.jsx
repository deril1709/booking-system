import React from 'react'
import Sidebar from '../components/Sidebar'
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