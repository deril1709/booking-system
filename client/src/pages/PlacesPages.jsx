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
                        <h2 className='text-xl font-mono'>Lapangan</h2>
                        <p className='text-gray-500 text-sm'>Contoh: Lapangan A, Lapangan 1</p>
                        <input type="text" placeholder='Nama Lapangan' />
                        <h2 className='text-xl font-mono pt-4'>Alamat</h2>
                        <input type="text" placeholder='Alamat' className='' />
                        <h2 className='text-xl font-mono pt-4'>Foto</h2>
                        <p className='text-gray-500 text-sm'>Foto Lapangan</p>
                        <div className='flex'>
                            <input type="text" placeholder={'add using a link ...'} />
                            <button className='bg-gray-200 rounded-2xl px-4'>Add Photo</button>
                        </div>
                        <button >p</button>
                    </form>
                </div>
            )}

        </div>
    );
};

export default PlacesPages;