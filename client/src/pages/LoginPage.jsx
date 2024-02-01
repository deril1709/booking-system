// LoginPage.js

import React, { useState, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { setTokenInLocalStorage } from '../utils/index';
import instance from '../utils/http';
import { UserContext } from '../UserContext';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { hasChange, handleChange } = useContext(UserContext)
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const originalString = `${email}:${password}`;
            const encodedString = btoa(originalString);
            const { data } = await instance.post(
                '/api/users/login',
                {},
                { headers: { Authorization: `Basic ${encodedString}` } }
            );
            setTokenInLocalStorage(data.data.accessToken);
            handleChange(!hasChange)
            alert('Success');
            setRedirect(true);
        } catch (error) {
            alert('Login error');
            console.error(error);
        }
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div className='mt-4 flex grow items-center justify-around'>
            <div className='mb-40'>
                <h1 className='text-4xl mb-4 text-center p-4'>Login</h1>
                <form action='' className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='login'>Login</button>
                    <div className='text-center p-2'>
                        Don't have an account yet? <Link to={'/register'} className='underline text-gray-600'>Register Here!</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
