import React, { useState } from 'react';

function PaymentPopup({ isOpen, onClose, onPayment, totalPayment }) {
    const [paymentMethod, setPaymentMethod] = useState('qris'); // Default to QRIS
    const [paymentProof, setPaymentProof] = useState(null);
    const [rentDuration, setRentDuration] = useState(1); // Default to 1 hour
    const hourlyRate = 45000;


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPaymentProof(file);
    };

    const handlePayment = () => {
        if (paymentMethod && paymentProof) {
            // Perform the payment action here with the selected payment method, total payment amount, and the uploaded payment proof
            // You can implement this part according to your project's requirements

            // Close the pop-up
            onClose();
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
                        <input
                            type="number"
                            value={totalPayment}
                            onChange={(e) => setTotalPayment(e.target.value)}
                            className="mb-4"
                        />
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
