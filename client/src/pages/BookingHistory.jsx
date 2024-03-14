import React, { useState, useEffect } from 'react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';

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

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="py-10 px-16 overflow-y-auto md:w-full">
            <h2 className="text-xl font-semibold mb-6">Booking History List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {bookingData.map((booking) => (
                    <div key={booking.id} className="border rounded-xl shadow-xl p-4 mb-4">
                        <h3 className="text-lg font-semibold mb-2">Field Name</h3>
                        <p className="text-gray-600 mb-2">{booking.fieldName}</p>
                        <h3 className="text-lg font-semibold mb-2">Booking Time</h3>
                        <p className="text-gray-600 mb-2">{booking.createdAt}</p>
                        <h3 className="text-lg font-semibold mb-2">Duration</h3>
                        <p className="text-gray-600 mb-2">{booking.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookingHistory;
