import React, { useState } from 'react';
import instance from '../utils/http'
import { getTokenFromLocalStorage } from '../utils'

function PaymentPopup({ isOpen, onClose, onPayment, totalPayment, data }) {
    const [paymentMethod, setPaymentMethod] = useState('qris'); // Default to QRIS
    const [paymentProof, setPaymentProof] = useState(null);
    const [rentDuration, setRentDuration] = useState(1); // Default to 1 hour
    // const [totalPayment, setTotalPayment] = useState(second)
    const hourlyRate = 45000;


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPaymentProof(file);
    };

    const handlePayment = async () => {
        if (paymentMethod && paymentProof) {
            // Create FormData object
            const formData = new FormData();
            formData.append('file', paymentProof);

            try {
                const response = await instance.post(`/api/files/`, formData, {
                    headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage("token"), 'Content-Type': 'multipart/form-data' },
                });

                const media = response.data.data

                await instance.post(`/api/orders/`, {
                    bookDate: data.bookDate,
                    duration: data.duration,
                    paymentProof: media,
                    fieldId: data.fieldId
                }, {
                    headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage("token") },
                });

            } catch (error) {
                console.error('Error updating field:', error);
                // Handle error, show error message to the user
            }

            onClose(alert("Booking Berhasil"));
        }
        else {
            // Handle case when required fields are not filled
            alert('Harap upload bukti pembayaran.');
        }
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-overlay"></div>
            <div className="modal-container">
                <div className="modal bg-white p-8 rounded-lg shadow-md max-w-lg">
                    <h2 className="text-3xl font-semibold mb-4">Payment</h2>
                    <div className="mb-4">
                        <label>
                            <input
                                type="radio"
                                value="qris"
                                checked={paymentMethod === 'qris'}
                                onChange={() => setPaymentMethod('qris')}
                            />
                            QRIS
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="bankTransfer"
                                checked={paymentMethod === 'bankTransfer'}
                                onChange={() => setPaymentMethod('bankTransfer')}
                            />
                            Bank Transfer
                        </label>
                    </div>
                    <div>
                        <input type="file" onChange={handleFileChange} className="mb-4" />
                    </div>
                    <div>
                        <label>Total Payment Amount: {onPayment}</label>
                    </div>
                    {paymentProof && (
                        <img src={URL.createObjectURL(paymentProof)} alt="Payment Proof" className="mt-4 w-full h-40 object-contain" />
                    )}
                    <button onClick={handlePayment} className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-md mt-6">
                        Confirm Payment
                    </button>
                    <button onClick={onClose} className="bg-gray-500 hover:bg-gray-600  text-white p-2 rounded-md ml-2 mt-6">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentPopup;
