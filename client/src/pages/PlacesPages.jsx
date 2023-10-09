import { Link, useParams, } from 'react-router-dom';

function PlacesPages() {
    const { action } = useParams();
    console.log(action);
    return (
        <div>
            {action !== 'new' && (
                <div className='text-center'>
                    <Link to={'/account/lapangan/new'} className='bg-blue-400 inline-flex rounded py-2 px-4 text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                        Tambah Lapangan
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        <h2 className='text-xl'>Lapangan</h2>
                        <p className='text-gray-500 text-sm'>Contoh: Lapangan A, Lapangan 1</p>
                        <input type="text" placeholder='Nama Lapangan' />
                        <h2 className='text-xl pt-4'>Alamat</h2>
                        <input type="text" placeholder='Alamat' className='' />
                        <h2 className='text-xl pt-4'>Foto</h2>
                        <p className='text-gray-500 text-sm'>Tambahkan foto menggunakan link atau langsung upload dari device anda</p>
                        <div className='flex gap-2'>
                            <input type="text" placeholder={'add using a link ...'} />
                            <button className='bg-gray-200 rounded-xl px-2'>Add&nbsp;photo</button>
                        </div>
                        <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            <button className='bg-gray-300 rounded-2xl p-4 border  text-2xl text-gray-600 flex gap-1 justify-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                Upload
                            </button>
                        </div>
                        <h2 className='text-xl mt-4'>Deskripsi</h2>
                        <p className='text-gray-500 text-sm'>Deskripsi mengenai lapangan yang tersedia</p>
                        <textarea />
                        <h2 className='text-xl mt-4'>Opening & Closing Time</h2>
                        <p className='text-gray-500 text-sm'>Pilih waktu opening dan closing pada lapangan</p>
                        <div className='grid sm:grid-cols-4 gap-4'>
                            <div>
                                <h3 className='mt-2 -mb-1'>Opening Time</h3>
                                <input type="text" placeholder='09.00' />
                            </div>
                            <div>
                                <h3 className='mt-2 -mb-1'>Closing Time</h3>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <button type='login' className='login my-4'>Save</button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
};

export default PlacesPages;