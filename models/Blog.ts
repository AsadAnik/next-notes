import mongoose, { Schema } from "mongoose";

export interface BlogModel {
    _id?: string;
    title: string;
    content: string;
};

const blogSchema = new Schema<BlogModel>({
    title: { type: String, required: true },
    content: { type: String, required: false },
}, {
    timestamps: true
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;