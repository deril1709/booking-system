import React from 'react'
import Sidebar from '../components/Sidebar'
import FieldList from '../components/FieldList'

function AdminFormlapangan() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='grow'>
                <FieldList />
            </main>
        </div>
    )
}

export default AdminFormlapangan