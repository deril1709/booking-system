import React, { useState, useEffect, } from 'react';
import PaymentPopup from '../components/PaymentPopup';
import { useParams } from 'react-router-dom';
import instance from '../utils/http';

function SingleField() {
    const { fieldId } = useParams();
    const [fieldData, setFieldData] = useState({});
    const [isPaymentPopupOpen, setPaymentPopupOpen] = useState(false);
    const [bookDate, setBookDate] = useState(0);
    const [duration, setDuration] = useState(0);
    const handleOpenPaymentPopup = () => {
        setPaymentPopupOpen(true);
    };
    const handleClosePaymentPopup = () => {
        setPaymentPopupOpen(false);
    };
    const handlePaymentConfirmation = () => {

        handleClosePaymentPopup();
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API using Axios and the fieldId from the URL
                const response = await instance.get(`/api/fields/${fieldId}`);
                const data = response.data;

                // Set the fetched data in the state
                setFieldData(data.data);
                console.log(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, [fieldId]);
    return (
        <div className="mt-4 bg-gray-300 -mx-8 px-8 pt-8">
            <h1 className="text-3xl">{fieldData.title}</h1>
            <a href={'https://www.google.com/maps/place/Lapangan+Bulutangkis+Damai/@-5.1302029,119.4939794,17z/data=!4m8!3m7!1s0x2dbefdb79dac8719:0xae0fa332867d9268!8m2!3d-5.1302029!4d119.4939794!9m1!1b1!16s%2Fg%2F11js8ntvlh?entry=ttu'}
                className='font-semibold underline flex gap-1 my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {fieldData.address}
            </a>
            <div className="grid gap-2 grid-cols-[2fr_1fr]">
                <div className="h-full w-full relative">

                    <img src={fieldData.photos ? `http://localhost:5050/api/uploaded-file/${fieldData.photos[0].split("media\\").at(-1)}` : ""} alt="" className='object-contain  h-full w-full' />
                </div>
                <div className='grid'>
                    <img src={fieldData.photos} alt="" className='aspect-video object-cover' />
                    <div>
                        <img src={fieldData.photos} alt="" className='aspect-video object-cover' />
                    </div>
                </div>

            </div>
            <div className="my-4 md:">
                <h2 className="font-semibold text-2xl">Description</h2>
                {fieldData.description}
            </div>

            <div className='md:grid grid-cols-[2fr_1fr] '>
                <div>
                    <p>Opening time: {fieldData.openingTime}</p>
                    <p>Closing time: {fieldData.closingTime}</p>
                </div>

                {/* card */}
                <div className='bg-white p-4 rounded-xl shadow mb-4 w-72 md:w-full'>
                    <div className='border rounded-2xl mt-4'>
                        <div className='text-xl text-center font-semibold'>
                            {fieldData.priceHourly} <br />
                        </div>
                        <div className="flex w-40 text-xs md:text-base md:w-full">
                            <div className=' bg-white py-3 px-4'>
                                <label>Pilih Tanggal dan jam</label>
                                <input type="datetime-local" onChange={(e) => setBookDate(e.target.value.getTime())} />
                            </div>
                            {/* <div className=' bg-white py-3 px-4 border-t'>
                                <label>Pilih Jam</label>
                                <input type="time" />
                            </div> */}
                            <div className=' bg-white py-3 px-4 border-t'>
                                <label>Durasi</label>
                                <input type="number" placeholder="1 jam" onChange={(e) => setDuration(e.target.value)} />
                            </div>
                        </div>
                        <button onClick={handleOpenPaymentPopup} className='login my-4 hover:bg-blue-600'>Booking Lapangan</button>
                        {/* Payment Pop-up */}
                        <PaymentPopup data={{ fieldId, bookDate, duration }} isOpen={isPaymentPopupOpen} onClose={handleClosePaymentPopup} onPayment={handlePaymentConfirmation} />
                    </div>
                    <div></div>
                </div>
            </div>

            {/* footer */}
            <div className="bg-white -mx-8 px-8 py-8 border-l">
                <div>
                    <h2 className="font-semibold text-2xl">Extra info</h2>
                </div>
                <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{fieldData.extraInfo}</div>
            </div>
        </div>
    );
}

export default SingleField;
