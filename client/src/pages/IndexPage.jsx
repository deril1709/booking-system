import React from 'react'
import img from '../damai-badminton.jpg'
import { Link } from 'react-router-dom'

function IndexPage() {
    const styles = {
        backgroundImage: `url(${img})`,
        backgroundSize: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        height: '80vh',

    }

    return (
        <>
            <div style={styles}>
            </div>
            <div className='h-full flex items-center justify-center'>
                <Link to={'/home'}>
                    <button className=' top-3/4 transform  rounded-2xl p-4 w-auto bg-blue-400 text-lg text-white'>Book Now</button>
                </Link>
            </div>
        </>
    )
}

export default IndexPage