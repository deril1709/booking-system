import React, { useState } from 'react';
import { Plus, Trash2, Eye } from 'lucide-react';

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
            paymentProof: '/path/to/payment-proof-image1.jpg',
        },
        {
            id: 2,
            userName: 'Alice Smith',
            bookingDate: '2023-10-16',
            bookingTime: '16:30',
            duration: '1.5 hours',
            status: 'Success',
            paymentProof: '/path/to/payment-proof-image2.jpg',
        },
        {
            id: 3,
            userName: 'Bob Smith',
            bookingDate: '2023-10-16',
            bookingTime: '09:30',
            duration: '1.5 hours',
            status: 'Success',
            paymentProof: '/path/to/payment-proof-image3.jpg',
        },
        // Add more booking data as needed
    ];

    const [bookingData, setBookingData] = useState(initialBookingData);
    const [viewedPaymentProof, setViewedPaymentProof] = useState(null);

    const handleDeleteBooking = (id) => {
        // Implement the delete functionality here
        const updatedBookingData = bookingData.filter((booking) => booking.id !== id);
        setBookingData(updatedBookingData);
    };

    const handleViewPaymentProof = (paymentProof) => {
        setViewedPaymentProof(paymentProof);
    };

    const closeViewPaymentProof = () => {
        setViewedPaymentProof(null);
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
            paymentProof: '/path/to/payment-proof-image4.jpg',
        };
        setBookingData([...bookingData, newBooking]);
    };

    return (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <h2 className="text-xl font-semibold mb-6">Admin Booking List</h2>
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
                                <td className="border p-2">{booking.userName}</td>
                                <td className="border p-2">{booking.bookingDate}</td>
                                <td className="border p-2">{booking.bookingTime}</td>
                                <td className="border p-2">{booking.duration}</td>
                                <td className="border p-2">{booking.status}</td>
                                <td className="border p-2 justify-center text-center space-x-2">
                                    <button
                                        onClick={() => handleViewPaymentProof(booking.paymentProof)}
                                        className="bg-blue-500 text-white p-2 rounded-md"
                                    >
                                        <Eye /> View
                                    </button>
                                    <button
                                        onClick={() => handleDeleteBooking(booking.id)}
                                        className="bg-red-500 text-white p-2 rounded-md"
                                    >
                                        <Trash2 /> Delete
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
            >
                <Plus /> Add New Booking
            </button>

            {viewedPaymentProof && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-4 rounded-lg">
                        <img src={viewedPaymentProof} alt="Payment Proof" />
                        <button
                            onClick={closeViewPaymentProof}
                            className="bg-red-500 text-white p-2 rounded-md mt-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminBookingList;
