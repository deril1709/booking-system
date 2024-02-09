import React, { useState, useEffect } from 'react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';

function Dashboard() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get('/api/users/master', {
                    headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
                })
                console.log('API Response:', response.data);
                const data = response.data.data

                setUserData(data);
            } catch (error) {
                console.error('error: ', error);
            }
        };
        fetchData();
    }, []);





    const handleEditUser = (id, name, email, password) => {
        const updatedUserData = userData.data.map((data) => {
            if (data.id === id) {
                return { id, name, email, password };
            }
            return { ...data, name, email, password };
        });

        setUserData(updatedUserData);
    };

    return (
        // ...
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <h2>Dashboard</h2>

            <div className="flex space-x-8 py-6">
                <div className="flex space-x-8 py-6">
                    <div className="flex flex-col rounded-md border-blue-400 border w-[400px] h-[150px] p-8 justify-center">
                        <h2 className='text-4xl text-center'>Total Pesanan</h2>
                        <p className="text-gray-500 mt-3 text-center text-2xl">10</p>
                    </div>
                    <div className="flex flex-col rounded-md border-blue-400 border w-[400px] h-[150px] p-8 justify-center">
                        <h2 className='text-4xl text-center'>User</h2>
                        <p className="text-gray-500 mt-3 text-center text-2xl">3</p>
                    </div>
                </div>
            </div>

            <div className="flex space-x-8 py-6">
                <div className="flex flex-col rounded-md border w-full p-8 justify-center">
                    <h2>Dummy</h2>
                    <div className="flex space-x-8 py-6">
                        <table className="border-collapse w-full">
                            <thead>
                                <tr>
                                    <th className="border p-2">ID</th>
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">role</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(userData)}
                                {userData && userData.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border p-2">{data.id}</td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => handleEditUser(data.id, e.target.value, data.email, data.password)}
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                value={data.email}
                                                onChange={(e) => handleEditUser(data.id, e.target.value, data.email, data.password)}
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                value={data.role}
                                                onChange={(e) => handleEditUser(data.id, e.target.value, data.email, data.password)}
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <button
                                                onClick={() => handleEditUser(data.id, data.name, data.email, data.password)}
                                                className="bg-red-600 text-white p-2 rounded-md"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;
