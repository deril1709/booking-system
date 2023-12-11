import React, { useState } from 'react';
import img from '../badminton.jpg';
import lapangan from '../Lapangan.jpg';
import PaymentPopup from '../components/PaymentPopup';


function SingleField() {
    const [isPaymentPopupOpen, setPaymentPopupOpen] = useState(false);

    const handleOpenPaymentPopup = () => {
        setPaymentPopupOpen(true);
    };

    const handleClosePaymentPopup = () => {
        setPaymentPopupOpen(false);
    };

    const handlePaymentConfirmation = () => {
        // Handle the payment confirmation logic here
        // You can implement this part according to your project's requirements
        // For example, you can send payment details to your backend
        // and display a confirmation message to the user
        // Then close the payment pop-up
        handleClosePaymentPopup();
    };

    return (
        <div className="mt-4 bg-gray-300 -mx-8 px-8 pt-8">
            <h1 className="text-3xl">Lapangan 1</h1>
            <a href={'https://www.google.com/maps/place/Lapangan+Bulutangkis+Damai/@-5.1302029,119.4939794,17z/data=!4m8!3m7!1s0x2dbefdb79dac8719:0xae0fa332867d9268!8m2!3d-5.1302029!4d119.4939794!9m1!1b1!16s%2Fg%2F11js8ntvlh?entry=ttu'} className='font-semibold underline flex gap-1 my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Jl.Damai Lr.1 Unhas, Tamalanrea, Makassar
            </a>
            <div className="grid gap-2 grid-cols-[2fr_1fr]">
                <div className="h-full w-full relative">
                    <img src={img} alt="" className='object-contain  h-full w-full' />
                </div>
                <div className='grid'>
                    <img src={lapangan} alt="" className='aspect-video object-cover' />
                    <div>
                        <img src={lapangan} alt="" className='aspect-video object-cover' />
                    </div>
                </div>

            </div>
            <div className="my-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, vero. Esse eveniet omnis sunt deserunt accusamus alias fugit, fuga quidem.
            </div>

            <div className='grid grid-cols-[2fr_1fr] '>
                <div>
                    <p>Open: 09.00</p>
                    <p>Close: 22.00</p>
                </div>
                <div className='bg-white p-4 rounded-xl shadow mb-4'>
                    <div className='border rounded-2xl mt-4'>
                        <div className='text-xl text-center font-semibold'>
                            Harga : Rp 45.000 per jam <br />
                        </div>
                        <div className="flex">
                            <div className=' bg-white py-3 px-4'>
                                <label>Pilih Tanggal</label>
                                <input type="date" />
                            </div>
                            <div className=' bg-white py-3 px-4 border-t'>
                                <label>Pilih Jam</label>
                                <input type="time" />
                            </div>
                            <div className=' bg-white py-3 px-4 border-t'>
                                <label>Durasi</label>
                                <input type="number" placeholder="1 jam" />
                            </div>
                        </div>
                        <button onClick={handleOpenPaymentPopup} className='login my-4 hover:bg-blue-600'>Booking Lapangan</button>
                        {/* Payment Pop-up */}
                        <PaymentPopup isOpen={isPaymentPopupOpen} onClose={handleClosePaymentPopup} onPayment={handlePaymentConfirmation} />
                    </div>
                    <div></div>
                </div>

            </div>
            <div className="bg-white -mx-8 px-8 py-8 border-l">
                <div>
                    <h2 className="font-semibold text-2xl">Extra info</h2>
                </div>
                <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo et pariatur quidem ratione, reprehenderit, dolorum id eligendi explicabo commodi ab velit fuga fugiat praesentium sapiente quas voluptatibus nostrum at.</div>
            </div>
        </div>
    );
}

export default SingleField;
