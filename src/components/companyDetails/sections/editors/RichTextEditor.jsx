

import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { joditConfig } from "./editorConfig";

const RichTextEditor = ({ value, onChange, placeholder }) => {
    const editorRef = useRef(null);

    const config = useMemo(() => ({
        ...joditConfig,
        placeholder: placeholder || "Start typing...",
    }), [placeholder]);

    return (
        <div className="rounded-xl border border-[var(--border-color)] overflow-hidden bg-white">
            <JoditEditor
                ref={editorRef}
                value={value}
                config={config}
                onBlur={(content) => onChange(content)}

                // config={{
                //     ...joditConfig,
                //     placeholder: placeholder || "Start typing...",
                // }}
            />
        </div>
    );
};

export default RichTextEditor;
