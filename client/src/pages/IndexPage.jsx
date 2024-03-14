import React from 'react';
import img from '../assets/image/damai-badminton.jpg';
import { Link } from 'react-router-dom';

function IndexPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center mx-5 my-5">
            <div className="w-full md:w-1/2">
                <img
                    src={img}
                    alt="Badminton Image"
                    className="rounded-lg shadow-lg object-cover object-center h-80 md:h-full w-full"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 mt-4 md:mt-0">
                <h1 className="text-4xl md:text-5xl font-bold italic text-blue-500 text-center md:text-left">
                    DAMAI BOOKING APP
                </h1>
                <p className="text-lg md:text-xl font-thin text-gray-800 text-center md:text-left">
                    Mudahkan pengalaman bermain Anda dengan mulai memesan lapangan melalui aplikasi pembookingan lapangan Badminton.
                </p>
                <Link to="/list" className="text-center md:text-left">
                    <button className="p-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300">
                        Lihat Lapangan
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default IndexPage;
