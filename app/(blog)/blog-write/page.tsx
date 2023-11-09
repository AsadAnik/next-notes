'use client';
import { BlogModel } from '@/models/Blog';
import React, { FormEvent, useState } from 'react';
import '@/styles/blog.scss';
import Button from '@/components/widgets/Button';
import Axios from 'axios';
import { useRouter } from 'next/navigation';


const Write = () => {
    const router = useRouter();
    const [blogData, setBlogData] = useState<BlogModel>({
        title: '',
        content: ''
    });
    const [isLoading, setLoading] = useState(false);

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
     * ---- Create Blog ----
     * @param formData 
     */
    const createBlog = async (formData: FormData) => {
        const response = await Axios.post('/api/blogs', {
            title: formData.get('title'),
            content: formData.get('content')
        });
        const data = response?.data;

        if (data?.success) {
            setLoading(false);
            router.push('/');
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
        await createBlog(formData);
    };


    return (
        <>
            <div className="container m-10 text-center">
                <h2 className='text-[30px]'>Write Blog</h2>

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

                    <Button title="Create" isLoading={isLoading} />
                </form>
            </div>
        </>
    )
}

export default Write