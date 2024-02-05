import React, { useEffect, useState } from 'react'
import instance from '../utils/http'
import { getTokenFromLocalStorage } from '../utils'



function UpdateLapangan({ fieldId, setEditingField }) {
    console.log('UpdateLapangan rendered with fieldId:', fieldId);
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        openingTime: '',
        closingTime: '',
        description: '',
        extraInfo: '',
        priceHourly: '',
        photos: [],
    });

    console.log(formData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(`/api/fields/${fieldId}`);
                const data = response.data;

                // console.log(data);
                // Set the fetched data in the state
                setFormData(data.data);
            } catch (error) {
                console.error('Error fetching field data:', error);
            }
        };

        fetchData();
    }, [fieldId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function submitForm(e) {
        e.preventDefault();
        try {
            await instance.put(`/api/fields/${fieldId}`, {
                title: formData.title,
                address: formData.address,
                openingTime: formData.openingTime,
                closingTime: formData.closingTime,
                description: formData.description,
                extraInfo: formData.extraInfo,
                priceHourly: formData.priceHourly,
                photos: formData.photos
            }, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() },
            });

            setFormData({
                title: '',
                address: '',
                openingTime: '',
                closingTime: '',
                description: '',
                extraInfo: '',
                priceHourly: '',
                photos: [],
            });
            setEditingField(null);
        } catch (error) {
            console.error('Error updating field:', error);
            // Handle error, show error message to the user
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
                    name='title'
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <h2 className='text-xl pt-4'>Alamat</h2>
                <input
                    type="text"
                    placeholder='address'
                    value={formData.address}
                    onChange={handleInputChange}
                />
                <h2 className='text-xl pt-4'>Foto</h2>
                <p className='text-gray-500 text-sm'>Tambahkan foto menggunakan link atau langsung upload dari device anda</p>
                <div className='flex gap-2'>
                    <input type="text"
                        placeholder={'add using a link ...'}
                        value={formData.photos}
                        onChange={handleInputChange}
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
                    value={formData.description}
                    onChange={handleInputChange}
                    name='description'
                />
                <h2 className='text-xl mt-4'>Extra Info</h2>
                <p className='text-gray-500 text-sm'>Deskripsi mengenai lapangan yang tersedia</p>
                <textarea
                    placeholder='extrainfo...'
                    value={formData.extraInfo}
                    onChange={handleInputChange}
                    name='extraInfo'
                />
                <h2 className='text-xl mt-4'>Opening & Closing Time</h2>
                <p className='text-gray-500 text-sm'>Pilih waktu opening dan closing pada lapangan</p>
                <div className='grid sm:grid-cols-4 gap-4'>
                    <div>
                        <h3 className='mt-2 -mb-1'>Opening Time</h3>
                        <input
                            type="text"
                            placeholder='09.00'
                            value={formData.openingTime}
                            onChange={handleInputChange}
                            name='openingTime'
                        />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1'>Closing Time</h3>
                        <input
                            type="text"
                            placeholder='22.00'
                            name='closingTime'
                            value={formData.closingTime}
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div>
                    <h3 className='mt-2 -mb-1'>Harga</h3>
                    <input
                        type="text"
                        placeholder='Rp 45.000'
                        name='priceHourly'
                        value={formData.priceHourly}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type='login' className='login my-4'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateLapangan