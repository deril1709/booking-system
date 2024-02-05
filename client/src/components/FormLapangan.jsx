import React from 'react'
import { useEffect, useState } from 'react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';

function FormLapangan() {
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [openingTime, setOpeningTime] = useState('')
    const [closingTime, setClosingTime] = useState('')
    const [description, setDescription] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [priceHourly, setPrice] = useState('')
    const [photos, setPhotos] = useState([])


    async function submitForm(e) {
        e.preventDefault();
        try {
            const response = await instance.post('/api/fields/', {
                title,
                address,
                description,
                extraInfo,
                priceHourly,
                openingTime,
                closingTime,
                photos
            }, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            })
            console.log('API Response:', response.data);
            console.log(response.data)
            const data = response.data.data;
            setconfig(data)

        } catch (error) {
            console.error('error: ', error);
        }
    };

    return (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <form onSubmit={submitForm}>
                <h2 className='text-xl'>Lapangan</h2>
                <p className='text-gray-500 text-sm'>Contoh: Lapangan A, Lapangan 1</p>
                <input
                    type="text"
                    placeholder='Nama Lapangan'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <h2 className='text-xl pt-4'>Alamat</h2>
                <input
                    type="text"
                    placeholder='Alamat'
                    className=''
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <h2 className='text-xl pt-4'>Foto</h2>
                <p className='text-gray-500 text-sm'>Tambahkan foto menggunakan link atau langsung upload dari device anda</p>
                <div className='flex gap-2'>
                    <input type="text"
                        placeholder={'add using a link ...'}
                        value={photos}
                        onChange={e => setPhotos(e.target.value)}
                    />
                    <button className='bg-gray-200 rounded-xl px-2'>Add&nbsp;photo</button>
                </div>
                <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                    <label className="h-20 bg-gray-500 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                        <input type="file" multiple className="hidden" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        Upload
                    </label>

                </div>
                <h2 className='text-xl mt-4'>Deskripsi</h2>
                <p className='text-gray-500 text-sm'>Deskripsi mengenai lapangan yang tersedia</p>
                <textarea
                    placeholder='deskripsi...'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <h2 className='text-xl mt-4'>Extra Info</h2>
                <p className='text-gray-500 text-sm'>Deskripsi mengenai lapangan yang tersedia</p>
                <textarea
                    placeholder='extrainfo...'
                    value={extraInfo}
                    onChange={e => setExtraInfo(e.target.value)}
                />
                <h2 className='text-xl mt-4'>Opening & Closing Time</h2>
                <p className='text-gray-500 text-sm'>Pilih waktu opening dan closing pada lapangan</p>
                <div className='grid sm:grid-cols-4 gap-4'>
                    <div>
                        <h3 className='mt-2 -mb-1'>Opening Time</h3>
                        <input
                            type="text"
                            placeholder='09.00'
                            value={openingTime}
                            onChange={e => setOpeningTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1'>Closing Time</h3>
                        <input
                            type="text"
                            placeholder='22.00'
                            value={closingTime}
                            onChange={e => setClosingTime(e.target.value)} />
                    </div>
                </div>
                <div>
                    <h3 className='mt-2 -mb-1'>Harga</h3>
                    <input
                        type="text"
                        placeholder='Rp 45.000'
                        value={priceHourly}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <button type='login' className='login my-4'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default FormLapangan