import { useNavigate } from "react-router-dom";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

const BlogCard = ({ blog, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/blogs/${blog.slug}`);
    };

    return (
        <div
            className="bg-[var(--bg-card)] border border-[var(--border-color)]
                rounded-xl overflow-hidden shadow-sm hover:shadow-md
                transition cursor-pointer flex flex-col"
        >
            {/* Banner */}
            <div className="h-44 overflow-hidden">
                <img
                    src={blog.bannerImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onClick={handleView}
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <h3
                    onClick={handleView}
                    className="text-base font-semibold text-[var(--text-primary)] line-clamp-2"
                >
                    {blog.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-2">
                    {blog.excerpt}
                </p>

                <p className="mt-3 text-xs text-[var(--text-secondary)]">
                    Created: {blog.createdAt}
                </p>

                {/* Actions */}
                <div className="mt-auto pt-4 flex items-center justify-between">
                    <button
                        onClick={handleView}
                        className="flex items-center gap-1 text-sm
                            text-[var(--color-brand)]
                            hover:underline"
                    >
                        <FiEye className="h-4 w-4" />
                        View
                    </button>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => onEdit?.(blog)}
                            className="text-[var(--text-secondary)] hover:text-[var(--color-brand)]"
                        >
                            <FiEdit2 className="h-4 w-4" />
                        </button>

                        <button
                            onClick={() => onDelete?.(blog)}
                            className="text-[var(--text-secondary)] hover:text-red-500"
                        >
                            <FiTrash2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
