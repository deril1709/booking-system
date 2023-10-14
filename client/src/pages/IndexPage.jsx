import React from 'react';
import img from '../damai-badminton.jpg';
import { Link } from 'react-router-dom';

function IndexPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 mx-5 my-5">
            <div className="w-full md:w-1/2">
                <img src={img} alt="Badminton Image" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 text-center space-y-4">
                <p className='text-justify text-4xl font-extrabold'>DAMAI BOOKING APP</p>
                <p className="text-lg text-start text-gray-700">
                    Mudahkan pengalaman bermain anda dengan mulai memesan lapangan <br />
                    melalui aplikasi pembookingan lapangan Badminton.
                </p>
                <Link to="/home">
                    <button className="p-3 bg-blue-400 text-white text-lg rounded-md hover:bg-blue-600 mt-6">
                        Book Now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default IndexPage;
