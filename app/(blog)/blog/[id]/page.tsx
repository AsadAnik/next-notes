'use client';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'next/navigation';
import { BlogModel } from '@/models/Blog';

const Blog = () => {
    const { id: blogId } = useParams();
    const [blog, setBlog] = useState<BlogModel>();

    const fetchBlog = async (id: string) => {
        const response = await Axios.get(`/api/blogs/${id}`);
        const data = response?.data;

        if (data?.success) {
            setBlog(data.blog);
        }
    };


    useEffect(() => {
        fetchBlog(`${blogId}`);
    }, []);

    
    return (
        <>
            {blog && (
                <>
                    <div className='container m-10 w-[60%]'>
                        <h1 className='text-[40px] text-center'>{blog.title}</h1>
                        <p>
                            {blog.content}
                        </p>
                    </div>
                </>
            )}
        </>
    )
}

export default Blog