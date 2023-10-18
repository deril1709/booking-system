import React from 'react';
import img from '../badminton.jpg';
import lapangan from '../Lapangan.jpg';

function SingleField() {
    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
            <h1 className="text-3xl">Lapangan 1</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <a href={'https://www.google.com/maps/place/Lapangan+Bulutangkis+Damai/@-5.1302029,119.4939794,17z/data=!4m8!3m7!1s0x2dbefdb79dac8719:0xae0fa332867d9268!8m2!3d-5.1302029!4d119.4939794!9m1!1b1!16s%2Fg%2F11js8ntvlh?entry=ttu'} className='block font-semibold underline'>Tamalanrea, Makassar</a>
            <div className="grid gap-2 grid-cols-[2fr_1fr]">

                <div className="h-full w-full relative">
                    <img src={img} alt="" className='object-contain  h-full w-full' />
                </div>

                <div className='grid'>
                    <img src={lapangan} alt="" className='aspect-video object-cover' />
                    <div>
                        <img src={lapangan} alt="" className='aspect-video object-cover' />
                    </div>
                </div>

                <div>
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, vero. Esse eveniet omnis sunt deserunt accusamus alias fugit, fuga quidem.
                    </div>
                    Open: 09.00<br />
                    Close: 22.00<br />
                </div>
            </div>
            <div className="bg-white -mx-8 px-8 py-8 border-t">
                <div>
                    <h2 className="font-semibold text-2xl">Extra info</h2>
                </div>
                <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo et pariatur quidem ratione, reprehenderit, dolorum id eligendi explicabo commodi ab velit fuga fugiat praesentium sapiente quas voluptatibus nostrum at.</div>
            </div>
        </div>
    );
}

export default SingleField;
