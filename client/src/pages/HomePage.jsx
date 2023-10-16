import React from 'react';
import img from '../damai-badminton.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-8">
            <Link to="/login">
                <div className="bg-gray-500 mb-2 rounded-2xl flex" style={{ height: '12rem' }}>
                    <img
                        src={img}
                        alt=""
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>
                <h2 className="font-bold">lapangan 1</h2>
                <h3 className="text-sm text-gray-500">Lorem ipsum dolor sit.</h3>
                <div className="mt-1">
                    <span className="font-bold">$300</span> per night
                </div>
            </Link>

            <Link to="/login">
                <div className="bg-gray-500 mb-2 rounded-2xl flex" style={{ height: '12rem' }}>
                    <img
                        src={img}
                        alt=""
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>
                <h2 className="font-bold">test</h2>
                <h3 className="text-sm text-gray-500">Lapangan 1</h3>
                <div className="mt-1">
                    <span className="font-bold">Rp 45.000</span> per jam
                </div>
            </Link>
        </div>
    );
}

export default HomePage;
