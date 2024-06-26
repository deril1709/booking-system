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
    const [newField, setNewField] = useState(null);
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
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await instance.get('/api/fields');
            const data = response.data;
            setFields(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEditField = (field) => {
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

        setEditingField(field.id);
    };

    const handleAddNewField = () => {
        setNewField(true);
    };

    const handleDeleteField = async (fieldId) => {
        try {
            await instance.delete(`/api/fields/${fieldId}`, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() },
            });

            const updatedFields = fields.filter((field) => field.id !== fieldId);
            setFields(updatedFields);
        } catch (error) {
            console.error('Error deleting field:', error);
        }
    };

    return (
        <div className="py-10 px-6 lg:px-12 xl:px-16 h-screen overflow-y-auto">
            {editingField ? (
                <UpdateLapangan fieldId={editingField} setEditingField={setEditingField} />
            ) : newField ? (
                <FormLapangan setNewField={setNewField} />
            ) : (
                <div>
                    <div className='flex justify-between'>
                        <h2 className="text-3xl font-semibold mb-8">List Lapangan</h2>
                        <button
                            onClick={handleAddNewField}
                            className="bg-blue-400 text-white p-2 rounded-md flex text-center justify-end gap-2 h-10"
                        >
                            <Plus /> Tambah Lapangan
                        </button>
                    </div>
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
                </div>
            )}
        </div>
    );
}

export default FieldList;
