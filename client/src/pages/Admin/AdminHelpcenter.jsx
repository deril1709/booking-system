import Sidebar from '../../components/Sidebar'
import React from 'react'
import HelpCenter from '../HelpCenter'

function AdminHelpcenter() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <HelpCenter />
            </main>
        </div>
    )
}

export default AdminHelpcenter