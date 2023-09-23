import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            await axios.post('/login', { email, password });
        } catch (error) {
            alert('login error ')
        }
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
                    <button>Login</button>
                    <div className='text-center p-2'>Don't have an account yet? <Link to={'/register'} className='underline text-gray-600'>Register Here!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage