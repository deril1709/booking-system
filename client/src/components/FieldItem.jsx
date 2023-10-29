import React from 'react';
import image from '../badminton.jpg'

function FieldItem({ field, onEdit, onDelete }) {
    return (
        <div className="border p-4 mb-4">
            <img src={image} alt="" className='' />
            <h2 className="text-xl font-semibold">{field.name}</h2>
            <p className="text-gray-600">{field.address}</p>
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
