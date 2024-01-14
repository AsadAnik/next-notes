'use server';
import Blog, { BlogModel } from '@/models/Blog';


/**
* ---- Specific Blog ----
* @param id 
*/
export const blogById = async (id: string): Promise<BlogModel | {}> => {
    try {
        // Directly Communicating with Database..
        const blog: BlogModel | null = await Blog.findById(id);
        if (!blog) return {};
        return blog;

    } catch (error) {
        console.log("Error while deleting the Blog", error);
        return false;
    }
};

/**
* ---- Update Blog ----
* @param id 
* @param data
*/
export const blogUpdate = async (id: string, data: object): Promise<Boolean> => {
    try {
        // Directly Communicating with Database..
        const blogUpdated: BlogModel | null = await Blog.findByIdAndUpdate(id, data);
        if (!blogUpdated) return false;
        return true;

    } catch (error) {
        console.log("Error while deleting the Blog", error);
        return false;
    }
};


/**
* ---- Delete Blog ----
* @param id 
*/
export const blogDelete = async (id: string): Promise<Boolean> => {
    try {
        // Directly Communicating with Database..
        const blogDeleted: BlogModel | null = await Blog.findByIdAndDelete(id);
        if (!blogDeleted) return false;
        return true;

    } catch (error) {
        console.log("Error while deleting the Blog", error);
        return false;
    }
};