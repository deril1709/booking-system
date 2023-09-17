import React from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
    return (
        <div className='mt-4 flex grow items-center justify-around'>
            <div className='mb-40'>
                <h1 className='text-4xl mb-4 text-center p-4'>Create Account</h1>
                <form action="" className='max-w-md mx-auto '>
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <button>Register</button>
                    <div className='text-center p-2'>Already Have an Account? <Link to={'/login'} className='underline text-gray-600'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage