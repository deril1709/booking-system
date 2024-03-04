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
                console.log(data.data);
                setBookingData(data.data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="fle py-10 px-16 overflow-y-auto md:w-full">
            <h2 className="text-xl font-semibold mb-6">Booking List History</h2>
            <div className="border border-blue-400 p-4 my-4 rounded-lg">
                <table className="w-full border-collapse md:w-full w-50 table-auto">
                    <thead>
                        <tr>
                            <th className="border p-2">Field</th>
                            <th className="border p-2">Booking Time</th>
                            <th className="border p-2">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((booking) => (
                            <tr key={booking.id}>
                                <td className="border p-2">{booking.fieldName}</td>
                                <td className="border p-2">{booking.createdAt}</td>
                                <td className="border p-2">{booking.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default BookingHistory;