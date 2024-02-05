import React from 'react';

function FieldItem({ field, onEdit, onDelete, setEditingField }) {
    const handleEditClick = () => {
        console.log('Edit button clicked for field:', field.id);
        onEdit(field);
        setEditingField(field.id)
    };

    const handleDeleteClick = () => {
        console.log('Delete button clicked for field ID:', field.id);
        onDelete(field.id);
    };

    return (
        <div className="border p-4 mb-4">
            <img src={field.photos} alt="" className='w-40' />
            <h2 className="text-xl font-semibold text-gray-500">{field.title}</h2>
            <div className="flex mt-2">
                <button onClick={handleEditClick} className="bg-blue-400  text-white p-2 rounded-md mr-2">
                    Edit
                </button>
                <button onClick={handleDeleteClick} className="bg-red-500  text-white p-2 rounded-md">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default FieldItem;
