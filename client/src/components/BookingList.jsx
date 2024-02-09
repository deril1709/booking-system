import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Eye, Pencil, Save, X } from 'lucide-react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';

function AdminBookingList() {
    const [bookingData, setBookingData] = useState([]);
    const [viewedPaymentProof, setViewedPaymentProof] = useState(null);
    const [editingBooking, setEditingBooking] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API using Axios (make sure to replace 'instance' with your Axios instance)
                const response = await instance.get('/api/orders', {
                    headers: {
                        Authorization: 'Bearer ' + getTokenFromLocalStorage(),
                    },
                });
                const data = response.data;

                // Set the fetched data in the state
                setBookingData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleDeleteBooking = async (bookingId) => {
        try {
            await instance.delete(`/api/orders/${bookingId}`, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            });
            const updatedBookingData = bookingData.filter((booking) => booking.id === bookingId)
            setBookingData(updatedBookingData)
        } catch (error) {
            console.log('Error deleting booking:', error);
        }
    };

    const handleViewPaymentProof = (paymentProof) => {
        setViewedPaymentProof(paymentProof);
    };

    const handleEditBooking = (booking) => {
        setEditingBooking(booking);
    };

    const handleSaveBooking = () => {
        const updatedBookingData = bookingData.map((booking) => {
            if (booking.id === editingBooking.id) {
                return editingBooking;
            }
            return booking;
        });
        setBookingData(updatedBookingData);
        setEditingBooking(null);
    };

    const handleCancelEdit = () => {
        setEditingBooking(null);
    };

    const addNewBooking = () => {

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
            <div className="border border-blue-400 p-4 my-4 rounded-lg">
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
                                <td className="border p-2">{booking.user.name}</td>
                                <td className="border p-2">{booking.bookDate}</td>
                                <td className="border p-2">{booking.createdAt}</td>
                                <td className="border p-2">{booking.duration}</td>
                                <td className="border p-2">{booking.status}</td>
                                <td className="border p-2 justify-center text-center space-x-2">
                                    <button
                                        onClick={() => handleEditBooking(booking)}
                                        className="bg-green-700 text-white p-2 rounded-md"
                                    >
                                        <Pencil />
                                    </button>
                                    <button
                                        onClick={() => handleViewPaymentProof(booking.paymentProof)}
                                        className="bg-blue-500 text-white p-2 rounded-md"
                                    >
                                        <Eye />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteBooking(booking.id)}
                                        className="bg-red-500 text-white p-2 rounded-md"
                                    >
                                        <Trash2 />
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
                        <img src={viewedPaymentProof} alt="Bukti Pembayaran" />
                        <button
                            onClick={() => setViewedPaymentProof(null)}
                            className="bg-red-500 text-white p-2 rounded-md mt-2"
                        >
                            <X /> Close
                        </button>
                    </div>
                </div>
            )}

            {editingBooking && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-4 rounded-lg">
                        <h2>Edit Booking</h2>
                        <form>
                            <label>User Name</label>
                            <input
                                type="text"
                                value={editingBooking.userName}
                                onChange={(e) => setEditingBooking({ ...editingBooking, userName: e.target.value })}
                            />
                            <label>Booking Date</label>
                            <input
                                type="text"
                                value={editingBooking.bookingDate}
                                onChange={(e) => setEditingBooking({ ...editingBooking, bookingDate: e.target.value })}
                            />
                            <label>Booking Time</label>
                            <input
                                type="text"
                                value={editingBooking.bookingTime}
                                onChange={(e) => setEditingBooking({ ...editingBooking, bookingTime: e.target.value })}
                            />
                            <label>Duration</label>
                            <input
                                type="text"
                                value={editingBooking.duration}
                                onChange={(e) => setEditingBooking({ ...editingBooking, duration: e.target.value })}
                            />
                            <label>Status</label>
                            <input
                                type="text"
                                value={editingBooking.status}
                                onChange={(e) => setEditingBooking({ ...editingBooking, status: e.target.value })}
                            />
                            <div className="mt-4">
                                <button
                                    onClick={handleSaveBooking}
                                    className="bg-blue-500 text-white p-2 rounded-md"
                                >
                                    <Save /> Save
                                </button>
                                <button
                                    onClick={handleCancelEdit}
                                    className="bg-red-500 text-white p-2 rounded-md ml-2"
                                >
                                    <X /> Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminBookingList;
