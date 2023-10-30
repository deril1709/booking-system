import React, { useState } from 'react';

function AdminBookingList() {
    // Sample data for booking list
    const [bookings, setBookings] = useState([
        {
            id: 1,
            userName: 'John Doe',
            lapangan: 'Lapangan A',
            bookingDate: '2023-10-15',
            bookingTime: '14:00',
            duration: '2 hours',
        },
        {
            id: 2,
            userName: 'Alice Smith',
            lapangan: 'Lapangan A',
            bookingDate: '2023-10-16',
            bookingTime: '16:30',
            duration: '1.5 hours',
        },
        // Add more booking data as needed
    ]);

    const [editingBooking, setEditingBooking] = useState(null);

    const handleEdit = (booking) => {
        setEditingBooking(booking);
    };

    const handleSave = (updatedBooking) => {
        // Update the booking data in your state or backend
        setEditingBooking(null);
    };

    return (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <h2 className="text-xl">Admin Booking List</h2>
            {bookings.map((booking) => {
                return (
                    <div key={booking.id} className="border p-4 my-4 rounded-lg">
                        <h2 className="text-2xl">User: {booking.userName}</h2>
                        {editingBooking === booking ? (
                            <div>
                                <label>Edit Lapangan:</label>
                                <input type="text" defaultValue={booking.lapangan} />
                                <label>Edit Booking Date:</label>
                                <input type="date" defaultValue={booking.bookingDate} />
                                <label>Edit Booking Time:</label>
                                <input type="time" defaultValue={booking.bookingTime} />
                                <label>Edit Booking Duration:</label>
                                <input type="text" defaultValue={booking.duration} />
                                <button onClick={() => handleSave(booking)}>Save</button>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-4 gap-4 mt-4">
                                <div>
                                    <h3 className="font-semibold">Lapangan:</h3>
                                    <p>{booking.lapangan}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Booking Date:</h3>
                                    <p>{booking.bookingDate}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Booking Time:</h3>
                                    <p>{booking.bookingTime}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Booking Duration:</h3>
                                    <p>{booking.duration}</p>
                                </div>
                            </div>
                        )}
                        <div className="mt-4">
                            {editingBooking === booking ? (
                                null // No extra button in edit mode
                            ) : (
                                <button onClick={() => handleEdit(booking)}>Edit</button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AdminBookingList;
