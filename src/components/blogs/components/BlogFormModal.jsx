import { useState, useEffect } from "react";
import BaseModal from "../../portal/BaseModal";

const BlogFormModal = ({ open, blog, onClose, onSave }) => {
    const isEditMode = Boolean(blog);

    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        bannerImage: null,
    });

    const [preview, setPreview] = useState(null);

    // Prefill in edit mode
    useEffect(() => {
        if (blog) {
            setFormData({
                title: blog.title || "",
                excerpt: blog.excerpt || "",
                content: blog.content || "",
                bannerImage: null,
            });

            setPreview(blog.bannerImage || null);
        } else {
            resetForm();
        }
    }, [blog, open]);

    const resetForm = () => {
        setFormData({
            title: "",
            excerpt: "",
            content: "",
            bannerImage: null,
        });
        setPreview(null);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            const file = files[0];
            setFormData((prev) => ({ ...prev, bannerImage: file }));
            setPreview(URL.createObjectURL(file));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSave = () => {
        if (!formData.title || !formData.content) return;

        const payload = {
            ...formData,
            bannerImage: preview, // store object URL for now
        };

        onSave(payload);
        resetForm();
    };

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title={isEditMode ? "Update Blog" : "Add New Blog"}
            size="lg"
        >
            <div className="space-y-6 p-4">

                {/* Basic Info */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Blog Information
                    </h3>

                    <div className="space-y-4">
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Blog Title"
                            className="form-input"
                        />

                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            placeholder="Short description (2 lines)"
                            rows={2}
                            className="form-input resize-none"
                        />

                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Full blog content..."
                            rows={6}
                            className="form-input resize-none"
                        />
                    </div>
                </section>

                {/* Banner Upload */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Banner Image
                    </h3>

                    <label
                        className="
                            flex flex-col items-center justify-center
                            border-2 border-dashed border-[var(--border-color)]
                            rounded-xl p-6 cursor-pointer
                            hover:border-[var(--color-brand)]
                            hover:bg-[var(--icon-hover-bg)]
                            transition
                        "
                    >
                        <span className="text-sm text-[var(--text-secondary)]">
                            Click to upload PNG or JPG
                        </span>

                        <input
                            type="file"
                            accept="image/png,image/jpeg"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </label>

                    {preview && (
                        <div className="mt-4">
                            <img
                                src={preview}
                                alt="Preview"
                                className="h-40 w-full object-cover rounded-lg border border-[var(--border-color)]"
                            />
                        </div>
                    )}
                </section>

                {/* Footer */}
                <div className="pt-4 flex justify-end gap-3 border-t border-[var(--border-color)]">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border
                            border-[var(--border-color)]
                            hover:bg-[var(--icon-hover-bg)] cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-5 py-2 rounded-lg
                            bg-[var(--color-brand)]
                            text-white font-medium cursor-pointer"
                    >
                        {isEditMode ? "Update Blog" : "Add Blog"}
                    </button>
                </div>

            </div>
        </BaseModal>
    );
};

export default BlogFormModal;
