import React from 'react';

const DeleteModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="bg-white p-6 rounded-md w-96 relative z-10">
                        <p className="text-lg font-semibold mb-4">Are you sure you want to delete this user?</p>
                        <div className="flex justify-end">
                            <button
                                onClick={onCancel}
                                className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onConfirm}
                                className="bg-red-600 text-white p-2 rounded-md"
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteModal;
