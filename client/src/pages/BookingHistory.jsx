import React, { useState, useEffect } from 'react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';
import img from '../assets/image/damai-badminton.jpg'

function BookingHistory() {
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get('/api/users/orders', {
                    headers: {
                        Authorization: 'Bearer ' + getTokenFromLocalStorage(),
                    },
                });
                const data = response.data;
                setBookingData(data.data)
                console.log(data.data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="py-10 px-16 overflow-y-auto md:w-full">
            <h2 className="text-xl font-semibold mb-6">Booking History</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {bookingData.map((booking) => (
                    <div key={booking.id} className="border rounded-xl shadow-xl p-4 mb-4 w-64 sm:w-full">
                        <img src={booking.field.photos ? `http://localhost:5050/api/uploaded-file/${booking.field.photos[0].split("media\\").at(-1)}` : ""} alt="" />
                        <h3 className="text-lg font-semibold mt-2">Field Name</h3>
                        <p className="text-gray-600">{booking.field.title}</p>
                        <h3 className="text-lg font-semibold mt-2">Booking Time</h3>
                        <p className="text-gray-600">{new Date(booking.bookDate * 1000).toDateString()}</p>
                        <h3 className="text-lg font-semibold mt-2">Duration</h3>
                        <p className="text-gray-600">{booking.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookingHistory;
