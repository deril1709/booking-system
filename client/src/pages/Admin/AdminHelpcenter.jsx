import Sidebar from '../../components/Sidebar'
import React from 'react'
import AdminHelp from '../AdminHelp'

function AdminHelpcenter() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <AdminHelp />
            </main>
        </div>
    )
}

export default AdminHelpcenter