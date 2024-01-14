'use client';
import React from 'react';
import Link from "next/link";
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { BlogModel } from '@/models/Blog';
import { blogDelete } from '@/server/serverActions';


interface BlogProps {
    blog: BlogModel
};

const Blog = ({ blog }: BlogProps) => {
    const router = useRouter();

     /**
     * ---- Delete Blog ----
     * @param id 
     */
     const handleDelete = async (id: string) => {
        const deleteConfirm: boolean = confirm("Are you sure wants to delete?");

        if (!deleteConfirm) {
            return false;
        }

        if (deleteConfirm) {
            const isDeleted = await blogDelete(id);
            router.refresh();
            return isDeleted;
        }
    };

    return (
        <ul className="container blog-wrapper" key={blog?._id}>
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
}

export default Blog