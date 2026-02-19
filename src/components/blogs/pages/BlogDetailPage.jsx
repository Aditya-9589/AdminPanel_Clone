import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { blogService } from "../services/blogService";

const BlogDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBlog();
    }, [slug]);

    const loadBlog = async () => {
        setLoading(true);
        const data = await blogService.getBlogBySlug(slug);
        setBlog(data);
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-[var(--text-secondary)]">Loading blog...</p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-red-500">Blog not found.</p>
            </div>
        );
    }

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl shadow-sm overflow-hidden">

            {/* Banner */}
            <div className="h-72 overflow-hidden">
                <img
                    src={blog.bannerImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-8">

                {/* Back Button */}
                <button
                    onClick={() => navigate("/blogs")}
                    className="flex items-center gap-2 text-sm mb-6
                        text-[var(--color-brand)]
                        hover:underline"
                >
                    <FiArrowLeft />
                    Back to Blogs
                </button>

                {/* Title */}
                <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
                    {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="mt-2 text-sm text-[var(--text-secondary)]">
                    <span>Published on {blog.createdAt}</span>
                    <span className="mx-2">•</span>
                    <span>By {blog.author?.name}</span>
                </div>

                {/* Content */}
                <div className="mt-6 text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                    {blog.content}
                </div>

            </div>
        </div>
    );
};

export default BlogDetailPage;
