import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { blogService } from "../services/blogService";
import BlogGrid from "../components/BlogGrid";
// import BlogFormModal from "../modals/BlogFormModal";
import BlogFormModal from "../components/BlogFormModal";
import DeleteConfirmPortal from "../../portal/DeleteConfirmPortal";

const ITEMS_PER_PAGE = 9;
const PAGE_WINDOW = 2;

const BlogListPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        const data = await blogService.getBlogs();
        setBlogs(data);
    };

    const handleSave = async (data) => {
        if (selectedBlog) {
            await blogService.updateBlog({ ...selectedBlog, ...data });
        } else {
            await blogService.createBlog(data);
        }

        setIsFormOpen(false);
        setSelectedBlog(null);
        loadBlogs();
    };

    const handleDelete = async () => {
        await blogService.deleteBlog(selectedBlog.id);
        setIsDeleteOpen(false);
        setSelectedBlog(null);
        loadBlogs();
    };

    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = blogs.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(totalPages, startPage + PAGE_WINDOW - 1);

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">

            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border-color)]">
                <div>
                    <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                        Blogs
                    </h1>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Manage blog posts
                    </p>
                </div>

                <button
                    onClick={() => {
                        setSelectedBlog(null);
                        setIsFormOpen(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-[var(--color-brand)] text-white text-sm font-medium cursor-pointer"
                >
                    <FiPlus />
                    Add Blog
                </button>
            </div>

            <BlogGrid
                blogs={currentItems}
                onEdit={(blog) => {
                    setSelectedBlog(blog);
                    setIsFormOpen(true);
                }}
                onDelete={(blog) => {
                    setSelectedBlog(blog);
                    setIsDeleteOpen(true);
                }}
            />

            {/* Pagination */}
            {blogs.length > 0 && (
                <div className="flex items-center justify-between mt-6 text-sm">
                    <p className="text-[var(--text-secondary)]">
                        showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + ITEMS_PER_PAGE, blogs.length)} of{" "}
                        {blogs.length}
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)] cursor-pointer"
                        >
                            Prev
                        </button>

                        {Array.from(
                            { length: endPage - startPage + 1 },
                            (_, i) => startPage + i
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-md border cursor-pointer
                                    ${currentPage === page
                                        ? "bg-[var(--color-brand)] text-white"
                                        : "border-[var(--border-color)] hover:bg-[var(--icon-hover-bg)]"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)] cursor-pointer"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Modals */}
            <BlogFormModal
                open={isFormOpen}
                blog={selectedBlog}
                onClose={() => {
                    setIsFormOpen(false);
                    setSelectedBlog(null);
                }}
                onSave={handleSave}
            // className="cursor-pointer"
            />

            <DeleteConfirmPortal
                open={isDeleteOpen}
                title="Delete Blog"
                description="Are you sure you want to delete this blog?"
                warningText="This action cannot be undone."
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedBlog(null);
                }}
                onConfirm={handleDelete}
            />

        </div>
    );
};

export default BlogListPage;
