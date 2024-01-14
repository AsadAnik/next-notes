import NoItems from "@/components/widgets/NoItems";
import Blog, { BlogModel } from "@/models/Blog";
import '@/styles/blog.scss';
import BlogView from '@/components/commons/BlogView';

const Page = async (): Promise<any> => {
    try {
        // Getting the data from MongoDB Database..
        const blogData = await Blog.find().sort({createdAt: -1});

        /**
        * ----- Render Blogs List Or No Items -----
        * @returns 
        */
        const renderBlogs = (data: any[]) => {
            if (data.length) {
                return data.map((blog: BlogModel) => (
                    <BlogView blog={blog} />
                ));
            }

            return (
                <>
                    <NoItems />
                </>
            );
        };

        return (
            <>
                {renderBlogs(blogData)}
            </>
        )

    } catch (error) {
        console.log("Error while fetching blog data -- ", error);
    }
};

export default Page;