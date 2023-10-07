import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../UserContext';


function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext)
    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert('Success');
            setRedirect(true);
        } catch (error) {
            alert('login error ');
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />;
    }
    return (
        <div className='mt-4 flex grow items-center justify-around'>
            <div className='mb-40'>
                <h1 className='text-4xl mb-4 text-center p-4'>Login</h1>
                <form action="" className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
                    <input type="email"
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input type="password"
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className='login'>Login</button>
                    <div className='text-center p-2'>Don't have an account yet? <Link to={'/register'} className='underline text-gray-600'>Register Here!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage