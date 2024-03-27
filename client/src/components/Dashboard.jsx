import React, { useState, useEffect } from 'react';
import instance from '../utils/http';
import { getTokenFromLocalStorage } from '../utils';
import { User } from 'lucide-react';
import DeleteModal from './DeleteUserModal';

function Dashboard() {
    const [userData, setUserData] = useState([])
    const [bookingData, setBookingData] = useState([])
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    useEffect(() => {
        //get total number of users
        const fetchDataUser = async () => {
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
        fetchDataUser();

        //get total booking
        const fetchDataBook = async () => {
            try {
                const response = await instance.get('/api/orders', {
                    headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
                })
                console.log('API Response:', response.data);
                const data = response.data.data

                setBookingData(data);
            } catch (error) {
                console.error('error: ', error);
            }

        }
        fetchDataBook();
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
                        <p className="text-gray-500 mt-3 text-center text-2xl">{bookingData.length}</p>
                    </div>
                    <div className="flex flex-col rounded-md border-blue-400 border w-[400px] h-[150px] p-8 justify-center">
                        <h2 className='text-4xl text-center'>User</h2>
                        <p className="text-gray-500 mt-3 text-center text-2xl">{userData.length}</p>
                    </div>
                </div>
            </div>

            <div className="relative overflow-x-auto flex space-x-8 py-6">
                <div className='flex flex-col rounded-md border w-full p-8 justify-center'>
                    <h2>Dummy</h2>
                    <div className="flex space-x-8 py-6 border-blue-400">
                        <table className="w-full text-md text-left text-gray-600">
                            <thead className='text-md text-gray-700 uppercase bg-blue-400 text-center'>
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
                                        <td className="border text-center justify-center p-2">
                                            <p
                                                value={data.name}
                                                onChange={(e) => handleDeleteUser(User.id, e.target.value)}>{data.name}</p>
                                        </td>
                                        <td className="border text-center p-2">
                                            <p
                                                value={data.email}
                                                onChange={(e) => handleDeleteUser(User.id, e.target.value)}
                                            >{data.email}</p>
                                        </td>
                                        <td className="border text-center p-2">
                                            <p
                                                type="readonly"
                                                value={data.role}
                                                onChange={(e) => handleDeleteUser(User.id, e.target.value)}
                                            >{data.role}</p>
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
