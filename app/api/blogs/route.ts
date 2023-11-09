import connectDB from "@/database/config";
import Blog from "@/models/Blog";
import { NextResponse, NextRequest } from "next/server";

// Connecting to Database..
(async () => {
    await connectDB();
})();


/**
 * ==== Get All Blogs ====
 * @returns 
 */
export const GET = async () => {
    const blogs = await Blog.find().sort({createdAt: -1});
    if (!blogs.length) return NextResponse.json({
        success: false,
        message: 'No Blogs!',
        blogs
    });

    return NextResponse.json({
        success: true,
        blogs,
        totalBlogs: blogs?.length
    });
};


/**
 * ==== Create Blog ====
 * @param req 
 * @returns 
 */
export const POST = async (req: NextRequest) => {
    const { title, content } = await req.json();

    if (typeof title !== 'string' || typeof content !== 'string') {
        return NextResponse.json({
            success: false,
            message: 'Title Or Content is not perfect with types!',
            titleType: typeof title,
            contentType: typeof content,
        });
    }

    if (title || content) {
        const blog = new Blog({ title, content });
        if (!blog) return NextResponse.json({
            success: false,
            message: 'Can not create Blog!',
            titleType: typeof title,
            contentType: typeof content,
        });

        await blog.save();

        return NextResponse.json({
            success: true,
            message: 'Blog Created Successfully',
            titleType: typeof title,
            contentType: typeof content,
        });
    }
};