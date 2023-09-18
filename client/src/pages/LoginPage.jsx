import React from 'react'
import { Link } from 'react-router-dom'


function LoginPage() {
    return (
        <div className='mt-4 flex grow items-center justify-around'>
            <div className='mb-40'>
                <h1 className='text-4xl mb-4 text-center p-4'>Login</h1>
                <form action="" className='max-w-md mx-auto '>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Login</button>
                    <div className='text-center p-2'>Don't have an account yet? <Link to={'/register'} className='underline text-gray-600'>Register Here!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage