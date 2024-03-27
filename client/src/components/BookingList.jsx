import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Eye, Pencil, Save, X } from 'lucide-react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';

function AdminBookingList() {
    const [bookingData, setBookingData] = useState([]);
    const [viewedPaymentProof, setViewedPaymentProof] = useState(null);
    const [editingBooking, setEditingBooking] = useState(null);
    const [Status, setStatus] = useState('PENDING')
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [bookingToDelete, setBookingToDelete] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
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

    // Fungsi untuk menampilkan modal konfirmasi dan menetapkan item yang akan dihapus
    const showDeleteConfirmation = (bookingId) => {
        setBookingToDelete(bookingId);
        setShowDeleteModal(true);
    };

    // Fungsi untuk menyembunyikan modal konfirmasi
    const hideDeleteConfirmation = () => {
        setBookingToDelete(null);
        setShowDeleteModal(false);
    };

    const handleDeleteBooking = async (bookingId) => {
        try {
            // Panggil showDeleteConfirmation untuk menampilkan modal konfirmasi
            showDeleteConfirmation(bookingId);
        } catch (error) {
            console.log('Error deleting booking:', error);
        }
    };

    // Di dalam fungsi handleDeleteBooking, panggil hideDeleteConfirmation setelah penghapusan berhasil
    const handleConfirmDelete = async (bookingId) => {
        try {
            await instance.delete(`/api/orders/${bookingId}`, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            });
            const updatedBookingData = bookingData.filter((booking) => booking.id !== bookingId);
            setBookingData(updatedBookingData);
            hideDeleteConfirmation(); // Sembunyikan modal setelah penghapusan berhasil
        } catch (error) {
            console.log('Error deleting booking:', error);
        }
    };

    const handleViewPaymentProof = (paymentProof) => {
        setViewedPaymentProof(paymentProof);
    };

    const handleEditBooking = async (booking) => {
        try {
            const response = await instance.put(`/api/orders/${booking.id}`, {
                status: Status === 'SUCCESS' ? true : false
            }, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            });

            const booking = response.data.data;
            setEditingBooking(booking);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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

    return (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <h2 className="text-xl font-semibold mb-6">Admin Booking List</h2>
            <div className="border border-blue-400 p-4 my-4 rounded-lg">
                <table className="w-full text-md text-left rtl:text-right text-gray-600">
                    <thead className='text-md text-gray-700 uppercase bg-blue-400 text-center'>
                        <tr>
                            <th className="border p-2">User Name</th>
                            <th className="border p-2">Booking Time</th>
                            <th className="border p-2">Durasi</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((booking) => (
                            <tr key={booking.id}>
                                <td className="border p-2 text-center">{booking.user.name}</td>
                                <td className="border p-2 text-center">{new Date(booking.bookDate * 1000).toString()}</td>
                                <td className="border p-2 text-center">{booking.duration} jam</td>
                                <td className="border p-2 text-center">{booking.status}</td>
                                <td className="border p-2 text-center justify-center space-x-2">
                                    <button
                                        onClick={() => handleEditBooking(booking)}
                                        className="bg-green-700 text-white p-2 rounded-md"
                                    >
                                        <Pencil />
                                    </button>

                                    <a href={`http://localhost:5050/api/uploaded-file/${booking.media.split("media\\").at(-1)}`} target='_blank'>
                                        <button
                                            onClick={() => handleViewPaymentProof(booking.paymentProof)}
                                            className="bg-blue-500 text-white p-2 rounded-md"
                                        >
                                            <Eye />
                                        </button>
                                    </a>
                                    <button
                                        data-modal-target="popup-modal"
                                        data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button"
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

            {viewedPaymentProof && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-4 rounded-lg">
                        <img src='viewedPaymentProof.jpg' alt="Bukti Pembayaran" />
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
                            <div>
                                <select
                                    className='block text-sm font-medium '
                                    name="languages"
                                    id="lang"
                                    value={editingBooking.status}
                                    onChange={(e) => {
                                        setEditingBooking({ ...editingBooking, status: e.target.value })
                                        setStatus(e.target.value)
                                    }
                                    }>
                                    <option value="SUCCESS" >SUCCESS</option>
                                    <option value="PENDING" >PENDING</option>
                                </select>
                            </div>
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
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-4 rounded-lg">
                        <p>Anda yakin ingin menghapus booking ini?</p>
                        <div className="flex justify-center mt-4">
                            {/* Menggunakan handleConfirmDelete untuk menghapus item */}
                            <button onClick={() => handleConfirmDelete(bookingToDelete)} className="bg-red-500 text-white p-2 rounded-md mr-2">
                                Konfirmasi
                            </button>
                            {/* Menggunakan hideDeleteConfirmation untuk menyembunyikan modal */}
                            <button onClick={hideDeleteConfirmation} className="bg-gray-300 text-gray-800 p-2 rounded-md ml-2">
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default AdminBookingList;