import React from 'react'

function LoginPage() {
    return (
        <div className='mt-4 flex grow items-center justify-around'>
            <div className='mb-40'>
                <h1 className='text-4xl mb-4 text-center p-4'>Login</h1>
                <form action="" className='max-w-md mx-auto '>
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage