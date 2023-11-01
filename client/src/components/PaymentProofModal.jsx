import React from 'react';

function PaymentProofModal({ imageUrl, onClose }) {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
            <div className="bg-white p-4 rounded-lg">
                <img src={imageUrl} alt="Payment Proof" />
                <button onClick={onClose} className="bg-blue-500 text-white px-2 py-1 rounded-md mt-4">
                    Close
                </button>
            </div>
        </div>
    );
}

export default PaymentProofModal;
