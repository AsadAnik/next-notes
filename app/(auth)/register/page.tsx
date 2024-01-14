'use client';
import React from 'react';
import Button from '@/components/widgets/Button';
import '@/styles/auth/auth.scss';
import Link from 'next/link';

const Register = (): React.ReactElement => {

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
                            <label className='text-2xl text-white'>Register Here</label>
                        </div>
                        
                        <label className='text-white'>Username</label>
                        <input
                            type="text"
                            className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'
                            placeholder='Username'
                        />
                        
                        <label className='text-white'>Email</label>
                        <input
                            type="email"
                            className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'
                            placeholder='Email'
                        />

                        <label className='text-white'>Birthdate</label>
                        <input
                            type="date"
                            className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'
                        />

                        <label className='text-white'>Gender</label>
                        <select name="" className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'>
                            <option value="0">Select a Gender</option>
                            <option value="male">Male</option>
                            <option value="male">Female</option>
                            <option value="male">Other</option>
                        </select>

                        <label className='text-white'>Password</label>
                        <input
                            type="password"
                            className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'
                            placeholder='Password'
                        />

                        <input
                            type="password"
                            className='w-full mb-3 h-[40px] px-5 font-light rounded-[5px]'
                            placeholder='Retype Password'
                        />

                        <Button title='Register' />

                        <div className='mt-3'>
                            <Link href="/login" className='text-[royalblue] hover:text-[blue]'>Already have an account ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;