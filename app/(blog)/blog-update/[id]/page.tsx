import { blogById } from '@/server/serverActions';
import BlogEdit from '@/components/commons/BlogEdit';
import { BlogModel } from '@/models/Blog';

const Update = async ({ params }: any) => {
    try {
        const id = params?.id;
        const blogData: BlogModel | any = await blogById(id);

        return (
            <>
                <div className="container m-10 text-center">
                    <h2 className='text-[30px]'>Edit Blog</h2>
                    <BlogEdit blogData={blogData} />
                </div>
            </>
        )
    } catch (error) {
        console.log("Error occured with Update Blog -- ", error);
    }
}

export default Update