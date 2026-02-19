// import { mockBlogs } from "../data/mockBlogs";
import { mockBlogs } from "../../../chartData/blogs/mockBlogs";

let blogs = [...mockBlogs];

const generateSlug = (title) =>
    title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

export const blogService = {
    getBlogs: async () => {
        return Promise.resolve([...blogs]);
    },

    getBlogBySlug: async (slug) => {
        const blog = blogs.find((b) => b.slug === slug);
        return Promise.resolve(blog);
    },

    createBlog: async (data) => {
        const newBlog = {
            ...data,
            id: Date.now().toString(),
            slug: generateSlug(data.title),
            createdAt: new Date().toISOString().split("T")[0],
            updatedAt: new Date().toISOString().split("T")[0],
            status: "published",
            author: {
                id: "admin-1",
                name: "Mike Neilsen",
            },
        };

        blogs.unshift(newBlog);
        return Promise.resolve(newBlog);
    },

    updateBlog: async (updatedBlog) => {
        blogs = blogs.map((b) =>
            b.id === updatedBlog.id
                ? { ...updatedBlog, updatedAt: new Date().toISOString().split("T")[0] }
                : b
        );

        return Promise.resolve(updatedBlog);
    },

    deleteBlog: async (id) => {
        blogs = blogs.filter((b) => b.id !== id);
        return Promise.resolve(true);
    },
};
