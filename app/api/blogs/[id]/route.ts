import connectDB from "@/database/config";
import Blog from "@/models/Blog";
import { NextResponse, NextRequest } from "next/server";

// Connecting to Database..
(async () => {
    await connectDB();
})();

interface Params {
    params: {
        id: number;
    }
};

/**
 * ==== Get Single Blog ====
 * @returns 
 */
export const GET = async (_req: NextRequest, { params }: Params) => {
    const blogId = params?.id;

    const blog = await Blog.findById(blogId);
    if (!blog) return NextResponse.json({
        success: false,
        message: 'Can not read this Blog!',
    });

    return NextResponse.json({
        success: true,
        message: 'Blog is fetched',
        blog
    });
};


/**
 * ==== Update Blog ====
 * @param req 
 * @returns 
 */
export const PUT = async (req: NextRequest, { params }: Params) => {
    const { title, content } = await req.json();
    const blogId = params?.id;

    if (typeof title !== 'string' || typeof content !== 'string') {
        return NextResponse.json({
            success: false,
            message: 'Title Or Content is not perfect with types!',
            titleType: typeof title,
            contentType: typeof content,
        });
    }

    if (title || content && blogId) {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, { title, content }, { new: true });
        if (!updatedBlog) return NextResponse.json({
            success: false,
            message: 'Can not update Blog!',
            titleType: typeof title,
            contentType: typeof content,
        });

        return NextResponse.json({
            success: true,
            message: 'Blog Updated Successfully',
            titleType: typeof title,
            contentType: typeof content,
            updatedBlog
        });
    }
};


/**
 * ==== Delete Blog ====
 * @returns 
 */
export const DELETE = async (_req: NextRequest, { params }: Params) => {
    const blogId = params?.id;

    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) return NextResponse.json({
        success: false,
        message: 'Can not delete this Blog!',
    });

    return NextResponse.json({
        success: true,
        message: 'Blog is Deleted'
    });
};