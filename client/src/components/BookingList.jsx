import React, { useState } from 'react';
import { Plus } from 'lucide-react'

function AdminBookingList() {
    // Sample data for booking list
    const initialBookingData = [
        {
            id: 1,
            userName: 'John Doe',
            bookingDate: '2023-10-15',
            bookingTime: '14:00',
            duration: '2 hours',
            status: 'Pending',
        },
        {
            id: 2,
            userName: 'Alice Smith',
            bookingDate: '2023-10-16',
            bookingTime: '16:30',
            duration: '1.5 hours',
            status: 'Success',
        }, {
            id: 3,
            userName: ' Smith',
            bookingDate: '2023-10-16',
            bookingTime: '09:30',
            duration: '1.5 hours',
            status: 'Success',
        }
        // Add more booking data as needed
    ];

    const [bookingData, setBookingData] = useState(initialBookingData);

    const handleDeleteBooking = (id) => {
        // Implement the delete functionality here
        const updatedBookingData = bookingData.filter((booking) => booking.id !== id);
        setBookingData(updatedBookingData);
    };

    const addNewBooking = () => {
        // Implement adding a new booking functionality here
        // You can open a modal or navigate to a booking form.
        // For this example, we'll add a new booking with a random ID.
        const newBooking = {
            id: Math.floor(Math.random() * 1000), // Generate a random ID
            userName: 'New User',
            bookingDate: '2023-10-17',
            bookingTime: '15:30',
            duration: '1 hour',
            status: 'Pending',
        };
        setBookingData([...bookingData, newBooking]);
    };

    return (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <h2 className="text-xl">Admin Booking List</h2>
            <div className="border p-4 my-4 rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">User Name</th>
                            <th className="border p-2">Booking Date</th>
                            <th className="border p-2">Booking Time</th>
                            <th className="border p-2">Duration</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((booking) => (
                            <tr key={booking.id}>
                                <td className="border p-2">
                                    {booking.userName}
                                </td>
                                <td className="border p-2">
                                    {booking.bookingDate}
                                </td>
                                <td className="border p-2">
                                    {booking.bookingTime}
                                </td>
                                <td className="border p-2">
                                    {booking.duration}
                                </td>
                                <td className="border p-2">
                                    {booking.status}
                                </td>
                                <td className="border p-2">
                                    <button
                                        onClick={() => handleDeleteBooking(booking.id)}
                                        className="bg-red-500 text-white p-2 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button
                onClick={addNewBooking}
                className="bg-blue-500 text-white p-2 rounded-md flex text-center justify-center gap-2"
            >   <Plus />
                Add New Booking
            </button>
        </div>
    );
}

export default AdminBookingList;
