import React from 'react'

function AdminHelp() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-10">
            <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Help Center</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Contact Developer</h2>
                    <p className="text-gray-700">jika memiliki masalah atau ada yang ingin ditanyakan hubungi developer melalui:</p>
                    <ol className="list-disc pl-6">
                        <li>Email: punktator17@gmail.com</li>
                        <li>Telepon: 0821-5104-3335</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default AdminHelp