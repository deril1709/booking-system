import React, { useState } from 'react';
import Chart from './Graph';

function Dashboard() {
    // Dummy user data
    const initialUserData = [
        { id: 1, name: 'User 1', email: 'user1@example.com', password: 'xxxx' },
        { id: 2, name: 'User 2', email: 'user2@example.com', password: 'xxxx' },
        { id: 3, name: 'User 3', email: 'user3@example.com', password: 'xxxx' },
    ];

    const [userData, setUserData] = useState(initialUserData);

    const handleEditUser = (id, name, email, password) => {
        // Implement the edit functionality here (e.g., open a modal)
        // For this example, we'll simply update the state directly
        const updatedUserData = userData.map((user) => {
            if (user.id === id) {
                return { id, name, email, password };
            }
            return user;
        });

        setUserData(updatedUserData);
    };

    return (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
            <h2>Dashboard</h2>

            <div className="flex space-x-8 py-6">
                <div className="flex flex-col rounded-md border-blue-400 border w-[400px] h-[150px] p-8 justify-center">
                    <h2 className='text-4xl text-cente'>Total Pesanan</h2>
                    <p className="text-gray-500 mt-3 text-center text-2xl">10</p>
                </div>
                <div className="flex flex-col rounded-md border-blue-400 border w-[400px] h-[150px] p-8 justify-center">
                    <h2 className='text-4xl text-center'>User</h2>
                    <p className="text-gray-500 mt-3 text-center text-2xl">3</p>
                </div>
            </div>

            <div className="flex space-x-8 py-6">
                <div className="flex flex-col rounded-md border w-full p-8 justify-center">
                    <h2>Dummy</h2>
                    <div className="flex space-x-8 py-6">
                        <table className="border-collapse border w-full">
                            <thead>
                                <tr>
                                    <th className="border p-2">ID</th>
                                    <th className=" p-2">Name</th>
                                    <th className=" p-2">Email</th>
                                    <th className=" p-2">Password</th>
                                    <th className=" p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((user) => (
                                    <tr key={user.id}>
                                        <td className="border p-2">{user.id}</td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                value={user.name}
                                            // Implement onChange to edit the name
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                value={user.email}
                                            // Implement onChange to edit the email
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                value={user.password}
                                            // Implement onChange to edit the email
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <button
                                                onClick={() => handleEditUser(user.id, user.name, user.email, user.password)}
                                                className="bg-red-600 text-white p-2 rounded-md"
                                            >
                                                Delete
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
