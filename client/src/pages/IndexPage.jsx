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
                    className="rounded-lg shadow-lg object-cover object-center h-50 md:h-full w-full"
                />
            </div>
            <div className="w-full md:w-1/2 text-center space-y-4 mt-4 md:mt-0">
                <h1 className="text-5xl font-montserrat italic text-blue-400">DAMAI BOOKING APP</h1>
                <p className="text-lg font-montserrat font-thin text-black">
                    Mudahkan pengalaman bermain anda dengan mulai memesan lapangan <br />
                    melalui aplikasi pembookingan lapangan Badminton.
                </p>
                <Link to="/list">
                    <button className="p-4 bg-blue-400 text-white text-lg rounded-lg hover:bg-blue-600 hover:shadow-md transition duration-300 mt-6">
                        Lihat Lapangan
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default IndexPage;
