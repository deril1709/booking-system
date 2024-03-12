import React from 'react';

const DeleteModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="bg-white p-6 rounded-md w-96 relative z-10">
                        <svg class="mx-auto mb-4 text-red-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="text-lg font-semibold mb-4">Yakin ingin menghapus user ini?</p>
                        <div className="p-4 text-center">
                            <button onClick={onCancel}
                                className="bg-gray-300 text-gray-700 p-2 rounded-md text-center mr-2">Cancel
                            </button>
                            <button onClick={onConfirm}
                                className="bg-red-600 text-white p-2 rounded-md text-center">Delete
                            </button>
                        </div>
                    </div>
                </div>
                // <div className="fixed inset-0 flex items-center justify-center">
                //     <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                //     <div className="bg-white p-6 rounded-md w-96 relative z-10">
                //         <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                //         </svg>
                //         <p className="text-lg font-semibold mb-4">Yakin ingin menghapus user ini?</p>
                //         <div className="p-4 text-center">
                //             <button
                //                 onClick={onCancel}
                //                 className="bg-gray-300 text-gray-700 p-2 rounded-md text-center mr-2"
                //             >
                //                 Cancel
                //             </button>
                //             <button
                //                 onClick={onConfirm}
                //                 className="bg-red-600 text-white p-2 rounded-md text-center"
                //             >
                //                 Confirm Delete
                //             </button>
                //         </div>
                //     </div>
                // </div>
            )}
        </>
    );
};

export default DeleteModal;
