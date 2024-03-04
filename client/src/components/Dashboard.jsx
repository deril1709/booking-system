import React, { useState, useEffect } from 'react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';
import { User } from 'lucide-react';
import DeleteModal from './DeleteModal';

function Dashboard() {
    const [userData, setUserData] = useState([])
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

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

    const handleDeleteUser = async (userId) => {
        setSelectedUserId(userId);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await instance.delete(`/api/users/${selectedUserId}/master`, {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            });

            const updatedUserData = userData.filter((user) => user.id !== selectedUserId);
            setUserData(updatedUserData);

            setDeleteModalOpen(false);
            setSelectedUserId(null);
        } catch (error) {
            console.log('Error deleting user:', error);
        }
    };
    const handleCancelDelete = () => {
        setDeleteModalOpen(false);
        setSelectedUserId(null);
    };

    // const handleEditUser = (id, name, email, password) => {
    //     const updatedUserData = userData.data.map((data) => {
    //         if (data.id === id) {
    //             return { id, name, email, password };
    //         }
    //         return { ...data, name, email, password };
    //     });

    //     setUserData(updatedUserData);
    // };

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
                        <p className="text-gray-500 mt-3 text-center text-2xl">{userData.length}</p>
                    </div>
                </div>
            </div>

            <div className="flex space-x-8 py-6">
                <div className="flex flex-col rounded-md border border-blue-400 w-full p-8 justify-center">
                    <h2>Dummy</h2>
                    <div className="flex space-x-8 py-6 border-blue-400">
                        <table className="border w-full">
                            <thead >
                                <tr>
                                    <th className="border p-2 ">ID</th>
                                    <th className="border p-2 ">Name</th>
                                    <th className="border p-2 ">Email</th>
                                    <th className="border p-2 ">role</th>
                                    <th className="border p-2 ">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log('ini user data: ', userData)}
                                {userData && userData.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border text-center p-2">{data.id}</td>
                                        <td className="border text-center p-2">
                                            <input
                                                type="readonly"
                                                value={data.name}
                                                onChange={(e) => handleDeleteUser(User.id, e.target.value)}
                                            />
                                        </td>
                                        <td className="border text-center p-2">
                                            <input
                                                type="readonly"
                                                value={data.email}
                                                onChange={(e) => handleDeleteUser(User.id, e.target.value)}
                                            />
                                        </td>
                                        <td className="border text-center p-2">
                                            <input
                                                type="readonly"
                                                value={data.role}
                                                onChange={(e) => handleDeleteUser(User.id, e.target.value)}
                                            />
                                        </td>
                                        <td className="border text-center p-2">
                                            <button
                                                onClick={() => handleDeleteUser(data.id)}
                                                className="bg-red-600 text-white p-2 rounded-md"
                                            >
                                                Delete
                                            </button>
                                            <DeleteModal
                                                isOpen={isDeleteModalOpen}
                                                onCancel={handleCancelDelete}
                                                onConfirm={handleConfirmDelete}
                                            />
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
