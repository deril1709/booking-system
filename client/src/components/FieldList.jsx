import React, { useState, useEffect } from 'react';
import FieldItem from './FieldItem';
import FormLapangan from './FormLapangan';
import { Plus } from 'lucide-react';
import instance from '../utils/http';

function FieldList() {
    const [fields, setFields] = useState([]);
    const [editingField, setEditingField] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API using Axios
                const response = await instance.get('/api/fields');
                const data = response.data;

                // Set the fetched data in the state
                setFields(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    const handleEditField = (field) => {
        setEditingField(field);
    };

    const handleDeleteField = async (fieldId) => {
        try {
            // Send a DELETE request to the API endpoint for deleting a field
            await instance.delete(`/api/fields/${fieldId}`);

            // Remove the deleted field from the state
            const updatedFields = fields.filter((field) => field.id !== fieldId);
            setFields(updatedFields);
        } catch (error) {
            console.error('Error deleting field:', error);
        }
    };

    return (
        <div className="py-10 px-6 lg:px-12 xl:px-16 h-screen overflow-y-auto">
            <h2 className="text-3xl font-semibold mb-8">List Lapangan</h2>
            {editingField ? (
                <FormLapangan field={editingField} setEditingField={setEditingField} />
            ) : (
                <div>
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
                    <div>
                        <button className="bg-blue-400 text-white p-2 rounded-md flex text-center justify-center gap-2 w-full">
                            <Plus /> Tambah Lapangan
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FieldList;
