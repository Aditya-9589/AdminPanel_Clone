// Image preview before send 

import React from "react";

const ImagePreview = ({ file, onRemove }) => {
    const preview = URL.createObjectURL(file);

    return (
        <div className="mb-2 flex items-center gap-3">
            <img
                src={preview}
                alt="preview"
                className="h-16 w-16 rounded-lg object-cover border border-[var(--border-color)]"
            />
            <button
                onClick={onRemove}
                className="text-xs text-red-500 hover:underline"
            >
                Remove
            </button>
        </div>
    );
};

export default ImagePreview;
