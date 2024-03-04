import React from 'react';

const ConfirmDeleteModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold">Are you sure you want to delete this user?</p>
                        <div className="flex justify-end mt-4">
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

export default ConfirmDeleteModal;
