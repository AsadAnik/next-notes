'use client';
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import NoItems from "@/components/widgets/NoItems";
import Link from "next/link";
import { BlogModel } from "@/models/Blog";
import '@/styles/blog.scss';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const Page = (): React.ReactElement => {
    const router = useRouter();
    const [blogs, setBlogs] = useState<[]>([]);
    const [deleting, setDeleting] = useState<boolean>(false);

    /**
     * ---- Fetching Blogs -----
     */
    const fetchBlogs = async (): Promise<void> => {
        const response = await Axios.get('/api/blogs');
        const data = response?.data;

        if (data.success) {
            setBlogs(data.blogs);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [deleting]);

    /**
     * ---- Delete Blog ----
     * @param id 
     */
    const handleDelete = async(id: string) => {
        setDeleting(true);

        const deleteConfirm: boolean = confirm("Are you sure wants to delete?");

        if (!deleteConfirm) {
            setDeleting(false);
            return false;
        }

        if (deleteConfirm) {
            const response = await Axios.delete(`/api/blogs/${id}`);
            const data = response?.data;
    
            if (data.success) {
                router.push('/');
                setDeleting(false);
            }
        }
    };

    /**
     * ----- Render Blogs List Or No Items -----
     * @returns 
     */
    const renderBlogs = () => {
        if (blogs.length) {
            return blogs.map((blog: BlogModel, index) => (
                <ul className="container blog-wrapper" key={blog?._id || index}>
                    <li className="blog-list">
                        <Link href={`/blog/${blog?._id}`}>{blog?.title}</Link>
                        
                        <div className="blog-actions">
                            <span onClick={() => router.push(`/blog-update/${blog?._id}`)}>
                                <FiEdit />
                            </span>

                            <span onClick={() => handleDelete(String(blog?._id))}>
                                <AiFillDelete />
                            </span>
                        </div>
                    </li>
                </ul>
            )
            );
        }

        return (
            <>
                <NoItems />
            </>
        );
    };

    return (
        <>
            {renderBlogs()}
        </>
    )
};

export default Page;