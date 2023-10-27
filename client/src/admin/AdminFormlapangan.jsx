import React from 'react'
import FormLapangan from '../components/FormLapangan'
import Sidebar from '../components/Sidebar'

function AdminFormlapangan() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <FormLapangan />
            </main>
        </div>
    )
}

export default AdminFormlapangan