import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs, onEdit, onDelete }) => {
    if (!blogs.length) {
        return (
            <div className="py-12 text-center text-sm text-[var(--text-secondary)]">
                No blogs found.
            </div>
        );
    }

    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default BlogGrid;
