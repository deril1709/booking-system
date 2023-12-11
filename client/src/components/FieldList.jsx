import React, { useState } from 'react';
import FieldItem from './FieldItem';
import FormLapangan from './FormLapangan';
import { Plus } from 'lucide-react';

function FieldList() {
    // Dummy field data
    const initialFieldData = [
        { id: 1, name: 'Lapangan A' },
        { id: 2, name: 'Lapangan B' },
        { id: 3, name: 'Lapangan C' },
        // Add more field data as needed
    ];

    const [fields, setFields] = useState(initialFieldData);
    const [editingField, setEditingField] = useState(null);

    const handleEditField = (field) => {
        setEditingField(field);
    };

    const handleDeleteField = (fieldId) => {
        const updatedFields = fields.filter((field) => field.id !== fieldId);
        setFields(updatedFields);
    };

    return (
        <div className="py-10 px-6 lg:px-12 xl:px-16 h-screen overflow-y-auto">
            <h2 className="text-3xl font-semibold mb-8">List Lapangan</h2>
            {editingField ? (
                <FormLapangan field={editingField} setEditingField={setEditingField} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {fields.map((field) => (
                        <FieldItem
                            key={field.id}
                            field={field}
                            onEdit={handleEditField}
                            onDelete={handleDeleteField}
                        />
                    ))}
                </div>
            )}

            <button className="bg-blue-400 text-white p-2 rounded-md flex text-center justify-center gap-2 w-full">
                <Plus /> Tambah Lapangan
            </button>
        </div>
    );
}

export default FieldList;
