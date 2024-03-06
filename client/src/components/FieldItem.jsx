// FieldItem.js
import React, { useState } from 'react';

function FieldItem({ field, onEdit, onDelete, setEditingField }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleEditClick = () => {
        console.log('Edit button clicked for field:', field.id);
        onEdit(field);
        setEditingField(field.id);
    };

    const handleDeleteClick = () => {
        console.log('Delete button clicked for field ID:', field.id);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        onDelete(field.id);
        setIsDeleteModalOpen(false);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="border rounded-xl shadow-xl p-4 mb-4">
            <img src={field.photos} alt="" className='w-40' />
            <h2 className="text-xl font-semibold text-gray-500">{field.title}</h2>
            <div className="flex mt-2">
                <button onClick={handleEditClick} className="bg-blue-400 text-white p-2 rounded-md mr-2">
                    Edit
                </button>
                <button onClick={handleDeleteClick} className="bg-red-500 text-white p-2 rounded-md">
                    Delete
                </button>
            </div>

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="bg-white p-6 rounded-md w-96 relative z-10">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="text-lg font-semibold mb-4">Yakin ingin menghapus user ini?</p>
                        <div className="p-4 text-center">
                            <button onClick={handleCancelDelete}
                                className="bg-gray-300 text-gray-700 p-2 rounded-md text-center mr-2">Cancel
                            </button>
                            <button onClick={handleConfirmDelete}
                                className="bg-red-600 text-white p-2 rounded-md text-center">Delete
                            </button>
                        </div>
                    </div>
                </div>
                // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                //     <div className="bg-white p-4 rounded-md">
                //         <p className="text-lg mb-4">Are you sure you want to delete this field?</p>
                //         <div className="flex justify-end">
                //             <button onClick={handleCancelDelete} className="text-gray-600 mr-2">Cancel</button>
                //             <button onClick={handleConfirmDelete} className="text-red-500">Delete</button>
                //         </div>
                //     </div>
                // </div>
            )}
        </div>
    );
}

export default FieldItem;
