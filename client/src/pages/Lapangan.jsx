import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instance from '../utils/http';

function Lapangan() {
    const [fields, setFields] = useState([]);

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

    return (
        <div className="mt-12 grid md:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-6">
            {Array.isArray(fields) && fields.length > 0 ? (
                fields.map((fields) => (
                    <Link to={`/field/${fields.id}`} key={fields.id}>
                        <div className="bg-gray-500 mb-2 rounded-2xl flex h-48 min-w-full object-cover">
                            <img
                                src={fields.photos ? `http://localhost:5050/api/uploaded-file/${fields.photos[0].split("media\\").at(-1)}` : ""} // Assuming there's an 'image' property in the API response
                                alt="lapangan"
                                className="rounded-2xl h-full md:w-auto object-cover min-w-full"
                            />
                        </div>
                        <h2 className="font-bold">{fields.title}</h2>
                        <h3 className="text-sm text-gray-500">{fields.description}</h3>
                        <div className="mt-1">
                            <span className="font-bold">Rp{new Intl.NumberFormat('en-DE').format(fields.priceHourly)}</span> per jam
                        </div>
                    </Link>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Lapangan;
