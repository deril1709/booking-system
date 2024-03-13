import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../utils/http'

function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function registerUser(e) {
        e.preventDefault();
        try {
            await instance.post('/api/users/', {
                name,
                email,
                password,
            });
            navigate('/login')
            alert('registered')
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Data tidak boleh kosong.');
        }

    }

    return (
        <div className='mt-4 flex grow items-center justify-around'>
            <div className='mb-40'>
                <h1 className='text-4xl mb-4 text-center p-4'>Create Account</h1>
                <form action="" className='max-w-md mx-auto' onSubmit={registerUser}>
                    <input type="text" placeholder='Username'
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className='login hover:bg-blue-500 active:bg-blue-600'>Register</button>
                    <div className='text-center p-2'>Already Have an Account? <Link to={'/login'} className='underline text-gray-600'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage