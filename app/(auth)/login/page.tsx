'use client';
import React from 'react';
import Button from '@/components/widgets/Button';
import '@/styles/auth/auth.scss';
import Link from 'next/link';

const Login = (): React.ReactElement => {

    /**
     * ---- Handle Submit the form ----
     */
    const handleSubmit = (): void => {
        
    };

    return (
        <>
            <div className='auth-page'>
                <div className='container'>
                    <form onSubmit={handleSubmit} className='w-[600px] bg-gray-400 rounded-[10px] border-opacity-50 p-5 m-10'>
                        <div className='text-center mb-5'>
                            <label className='text-2xl text-white'>Login Here</label>
                        </div>

                        <input
                            type="text"
                            className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'
                            placeholder='Username or Email'
                        />

                        <input
                            type="password"
                            className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'
                            placeholder='Password'
                        />

                        <Button title='Login' />

                        <div className='mt-3'>
                            <Link href="/register" className='text-[royalblue] hover:text-[blue]'>Don't have an Account ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login