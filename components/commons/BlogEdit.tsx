'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { BlogModel } from '@/models/Blog';
import Button from '@/components/widgets/Button';

interface BlogEditProps {
    blogData: BlogModel
};

const BlogEdit = ({ blogData }: BlogEditProps) => {
    const router = useRouter();

    /**
    * ---- Handle Submit ----
    * @param event 
    */
    const handleSubmit = async (formData: FormData) => {
        // ..Action..
        router.refresh();
    };

    return (
        <div>
            <form action={handleSubmit}>
                <div className='input-control'>
                    <input
                        type="text"
                        placeholder='Title'
                        name="title"
                        value={blogData.title}
                    />
                </div>

                <div className='input-control'>
                    <textarea
                        name="content"
                        placeholder='Content'
                        value={blogData.content}
                    />
                </div>

                <Button title="Update" />
            </form>
        </div>
    )
}

export default BlogEdit