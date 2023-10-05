import React from 'react'
import { Link } from 'react-router-dom';

function PlacesPages() {
    return (
        <div className='mt-8'>
            <div className='text-center'>

                <Link to={'/account/lapangan/new'} className='bg-blue-400 inline-flex rounded py-2 px-4 text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                    Tambah Lapangan</Link>
            </div>
            PlacesPages
        </div>
    )
}

export default PlacesPages;