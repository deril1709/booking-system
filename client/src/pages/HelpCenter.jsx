import React from 'react';

function HelpCenter() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-10">
            <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Help Center</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Cara Memesan Lapangan</h2>
                    <p className="text-gray-700">Untuk memesan lapangan, Anda dapat mengikuti langkah-langkah berikut:</p>
                    <ol className="list-decimal pl-6">
                        <li>Pilih "Lihat Lapangan" dari menu utama.</li>
                        <li>Pilih lapangan yang ingin Anda booking.</li>
                        <li>Pilih tanggal dan waktu yang tersedia.</li>
                        <li>Isi informasi pemesanan dan klik "Booking".</li>
                    </ol>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Pembatalan Pemesanan</h2>
                    <p className="text-gray-700">Untuk membatalkan pemesanan, silakan hubungi admin kami melalui:</p>
                    <ul className="list-disc pl-6">
                        <li>Email: admin@damai.com</li>
                        <li>Telepon: 123-456-789</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Bantuan Lainnya</h2>
                    <p className="text-gray-700">Jika Anda memiliki pertanyaan lainnya atau membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami melalui:</p>
                    <ul className="list-disc pl-6">
                        <li>Email: support@damai.com</li>
                        <li>Telepon: 987-654-321</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HelpCenter;
