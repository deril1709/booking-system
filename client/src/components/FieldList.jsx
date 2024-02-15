import React, { useState, useEffect } from 'react';
import FieldItem from './FieldItem';
import { Plus } from 'lucide-react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';
import UpdateLapangan from './UpdateLapangan';
import FormLapangan from './FormTambahLapangan';

function FieldList() {
    const [fields, setFields] = useState([]);
    const [editingField, setEditingField] = useState(null);
    const [newField, setNewField] = useState(null)
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        openingTime: '',
        closingTime: '',
        description: '',
        extraInfo: '',
        priceHourly: '',
        photos: [],
    });

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
        fetchData();
    }, []);

    const handleEditField = (field) => {
        console.log(field);
        setFormData({
            title: field.title,
            address: field.address,
            openingTime: field.openingTime,
            closingTime: field.closingTime,
            description: field.description,
            extraInfo: field.extraInfo,
            priceHourly: field.priceHourly,
            photos: field.photos,
        });
    }
    const handleAddNewField = () => {
        setNewField(true);
    };
    const handleDeleteField = async (fieldId) => {
        try {
            // Send a DELETE request to the API endpoint for deleting a field
            await instance.delete(`/api/fields/${fieldId}`, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            });

            // Remove the deleted field from the state
            const updatedFields = fields.filter((field) => field.id !== fieldId);
            setFields(updatedFields);
        } catch (error) {
            console.error('Error deleting field:', error);
        }
    };

    console.log(editingField);


    return (
        <div className="py-10 px-6 lg:px-12 xl:px-16 h-screen overflow-y-auto">
            {editingField ? (
                <UpdateLapangan fieldId={editingField} setEditingField={setEditingField} />
            ) : newField ? (
                <FormLapangan setNewField={setNewField} />
            ) : (

                <div>
                    <h2 className="text-3xl font-semibold mb-8">List Lapangan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {fields.map((field) => (
                            <FieldItem
                                key={field.id}
                                field={field}
                                onEdit={() => handleEditField(field)}
                                onDelete={handleDeleteField}
                                setEditingField={setEditingField}
                            />
                        ))}
                    </div>

                    <div>
                        <button
                            onClick={handleAddNewField}
                            className="bg-blue-400 text-white p-2 rounded-md flex text-center justify-center gap-2 w-full"
                        >
                            <Plus /> Tambah Lapangan
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FieldList;
