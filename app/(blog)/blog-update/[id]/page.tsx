'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import Axios from 'axios';
import { BlogModel } from '@/models/Blog';
import { useParams, useRouter } from 'next/navigation';
import Button from '@/components/widgets/Button';

const Update = () => {
    const { id } = useParams();
    const router = useRouter();
    const [blogData, setBlogData] = useState<BlogModel>({
        title: '',
        content: ''
    });
    const [isLoading, setLoading] = useState(false);


    const getBlogData = async() => {
        const response = await Axios.get(`/api/blogs/${id}`);
        const data = response?.data;

        if (data.success) {
            console.log(data)
            setBlogData({
                title: data?.blog?.title,
                content: data?.blog?.content
            });
        }
    };


    useEffect(() => {
        getBlogData();
    }, []);


    /**
     * ---- Handle Change ----
     * @param event 
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlogData({
            ...blogData,
            [event.target.name]: [event.target.value]
        });
    };

    /**
     * ---- Update Blog ----
     * @param formData 
     */
    const updateBlog = async (formData: FormData) => {
        const response = await Axios.put(`/api/blogs/${id}`, {
            title: formData.get('title'),
            content: formData.get('content')
        });
        const data = response?.data;

        if (data?.success) {
            setLoading(false);
            router.push(`/blog/${id}`);
        }
    };


    /**
     * ---- Handle Submit ----
     * @param event 
     */
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', blogData?.title);
        formData.append('content', blogData?.content);
        await updateBlog(formData);
    };

    return (
        <>
            <div className="container m-10 text-center">
                <h2 className='text-[30px]'>Edit Blog</h2>

                <form onSubmit={handleSubmit}>
                    <div className='input-control'>
                        <input
                            type="text"
                            placeholder='Title'
                            name="title"
                            value={blogData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='input-control'>
                        <textarea
                            name="content"
                            placeholder='Content'
                            value={blogData.content}
                            onChange={handleChange}
                        />
                    </div>

                    <Button title="Update" isLoading={isLoading} />
                </form>
            </div>
        </>
    )
}

export default Update