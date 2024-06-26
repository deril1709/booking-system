import React, { useEffect, useState } from 'react'
import instance from '../utils/http'
import { getTokenFromLocalStorage } from '../utils'

function UpdateLapangan({ fieldId, setEditingField }) {
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
    const [photos, setPhotos] = useState([]);
    const [photoPreviews, setPhotoPreviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(`/api/fields/${fieldId}`);
                const data = response.data;



                // Set the fetched data in the state
                setFormData(data.data);

                // Init opening time and closing time
                const openingTimeInput = document.querySelector('input[name="openingTime"]');
                const openingTime = convertToString(data.data.openingTime);
                openingTimeInput.value = openingTime;

                const closingTimeInput = document.querySelector('input[name="closingTime"]');
                const closingTime = convertToString(data.data.closingTime);
                closingTimeInput.value = closingTime;

                setFormData((prevData) => ({
                    ...prevData,
                    openingTime: openingTime,
                    closingTime: closingTime,
                }));


                const field = data.data;
                const photo = field.photos ? `http://localhost:5050/api/uploaded-file/${field.photos[0].split("media\\").at(-1)}` : "";
                setPhotoPreviews([photo]);

            } catch (error) {
                console.error('Error fetching field data:', error);
            }
        };

        fetchData();
    }, [fieldId]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleFileChange = (e) => {
        const selectedPhotos = Array.from(e.target.files);
        setPhotos(selectedPhotos);

        // Generate previews for selected photos
        const previews = [];
        selectedPhotos.forEach((photo) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                previews.push(e.target.result);
                setPhotoPreviews([...previews]);
            };
            reader.readAsDataURL(photo);
        });
    };

    async function submitForm(e) {
        e.preventDefault();
        try {
            const photosArray = Array.isArray(photos) ? photos : [photos];

            const photosFormData = new FormData();

            photosArray.forEach((photo) => {
                photosFormData.append('file', photo);
            });
            const photosUploadResponse = await instance.post('/api/files', photosFormData, {
                headers: {
                    Authorization: 'Bearer ' + getTokenFromLocalStorage(),
                    'Content-Type': 'multipart/form-data',
                },
            });
            await instance.put(`/api/fields/${fieldId}`, {
                title: formData.title,
                address: formData.address,
                openingTime: convertToMinutes(formData.openingTime),
                closingTime: convertToMinutes(formData.closingTime),
                description: formData.description,
                extraInfo: formData.extraInfo,
                priceHourly: formData.priceHourly,
                photos: photosUploadResponse.data.data ? [photosUploadResponse.data.data] : formData.photos,
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
            alert("Berhasil edit lapangan")
            setEditingField(null);
            window.location.reload();

        } catch (error) {
            console.error('Error updating field:', error);
            alert('Error updating field: isi semua data dengan benar');
            // Handle error, show error message to the user
        }
    };
    function convertToMinutes(timeString) {

        // Split the time string into hours and minutes
        var timeParts = timeString.split(':');

        // Parse hours and minutes
        var hours = parseInt(timeParts[0]);
        var minutes = parseInt(timeParts[1]);

        // Convert hours to minutes and add to total
        var totalMinutes = hours * 60 + minutes;

        return totalMinutes;
    }

    function convertToString(time) {

        // Konversi total menit ke jam dan menit
        const hours = Math.floor(time / 60);
        const minutes = time % 60;

        // Format jam dan menit menjadi string dengan format HH:MM
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        // Gabungkan jam dan menit menjadi satu string
        return `${formattedHours}:${formattedMinutes}`;
    }

    return (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <div>
                <h1 className='text-3xl font-semibold mb-8'>Edit Lapangan</h1>
            </div>
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
                    name='address'
                    value={formData.address}
                    onChange={handleInputChange}
                />
                <h2 className='text-xl pt-4'>Foto</h2>
                <p className='text-gray-500 text-sm'>Tambahkan foto menggunakan link atau langsung upload dari device anda</p>
                <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
                    {photoPreviews.map((preview, index) => (
                        <img
                            key={index}
                            src={preview}
                            alt={`Preview-${index}`}
                            className="h-20 w-full object-cover rounded-lg border"
                        />
                    ))}
                </div>
                <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                    <label className="h-20 bg-gray-500 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                        <input type="file" multiple className="hidden" onChange={handleFileChange} />
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
                            type="time"
                            placeholder='09.00'
                            onChange={handleInputChange}
                            name='openingTime'
                        />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1'>Closing Time</h3>
                        <input
                            type="time"
                            placeholder='22.00'
                            name='closingTime'
                            onChange={handleInputChange}
                        />
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
                    <button type='submit' className='login my-4'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateLapangan