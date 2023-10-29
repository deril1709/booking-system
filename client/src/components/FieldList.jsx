import React, { useState } from 'react';
import FieldItem from './FieldItem';
import FormLapangan from './FormLapangan';

function FieldList() {
    // Dummy field data
    const initialFieldData = [
        { id: 1, name: 'Lapangan A', address: 'Alamat A' },
        { id: 2, name: 'Lapangan B', address: 'Alamat B' },
        { id: 3, name: 'Lapangan C', address: 'Alamat C' },
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
        <div div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <h2 className="text-xl font-semibold">List of Fields</h2>
            {editingField ? (
                <FormLapangan field={editingField} setEditingField={setEditingField} />
            ) : (
                fields.map((field) => (
                    <FieldItem
                        key={field.id}
                        field={field}
                        onEdit={handleEditField}
                        onDelete={handleDeleteField}
                    />
                ))
            )}
        </div>
    );
}

export default FieldList;
