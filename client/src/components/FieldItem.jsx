import React from 'react';
import image from '../badminton.jpg'

function FieldItem({ field, onEdit, onDelete }) {
    return (
        <div className="border p-4 mb-4">
            <img src={image} alt="" className='w-40' />
            <h2 className="text-xl font-semibold text-gray-500">{field.name}</h2>
            <div className="flex mt-2">
                <button onClick={() => onEdit(field)} className="bg-blue-500  text-white p-2 rounded-md mr-2">
                    Edit
                </button>
                <button onClick={() => onDelete(field.id)} className="bg-red-500  text-white p-2 rounded-md">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default FieldItem;
