import React from 'react';
import img from '../badminton.jpg';
import cover from '../damai-badminton.jpg';
import { Link } from 'react-router-dom';

function Lapangan() {
    return (
        <div className="mt-8 flex  gap-x-6 gap-y-6">
            <Link to="/field">
                <div className="bg-gray-500 mb-2 rounded-2xl flex h-48" >
                    <img
                        src={img}
                        alt=""
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>
                <h2 className="font-bold">lapangan 1</h2>
                <h3 className="text-sm text-gray-500">Lorem ipsum dolor sit  <br /> amet consectetur
                    adipisicing elit.</h3>
                <div className="mt-1">
                    <span className="font-bold">Rp 45.000</span> per jam
                </div>
            </Link>

            <Link to="/">
                <div className="bg-gray-500 mb-2 rounded-2xl flex h-48">
                    <img
                        src={cover}
                        alt=""
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>
                <h2 className="font-bold">Coming Soon</h2>
                <h3 className="text-sm text-gray-500">Lorem ipsum</h3>
                <div className="mt-1">
                    <span className="font-bold">Rp 45.000</span> per jam
                </div>
            </Link>
            <Link to="/">
                <div className="bg-gray-500 mb-2 rounded-2xl flex" style={{ height: '12rem' }}>
                    <img
                        src={cover}
                        alt=""
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>
                <h2 className="font-bold">Coming Soon</h2>
                <h3 className="text-sm text-gray-500">Lorem ipsum</h3>
                <div className="mt-1">
                    <span className="font-bold">Rp 45.000</span> per jam
                </div>
            </Link>
        </div>
    );
}

export default Lapangan;
