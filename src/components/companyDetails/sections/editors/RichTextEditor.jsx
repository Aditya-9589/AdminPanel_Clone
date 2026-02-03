import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { editorExtensions, editorProps } from "./editorConfig";
import EditorToolbar from "./EditorToolbar";


const RichTextEditor = ({
    label,
    value,
    onChange,
    // placeholder,
    helperText,
}) => {
    const editor = useEditor({
        extensions: editorExtensions,
        content: value || "",
        editorProps,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    // Sync external value (important for reset / API load)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value || "");
        }
    }, [value, editor]);

    if (!editor) return null;

    return (
        <div>
            {/* Label */}
            {label && (
                <label className="form-label mb-2 block">
                    {label}
                </label>
            )}

            {/* Editor container */}
            <div
                className="
                    rounded-xl border border-[var(--border-color)]
                    bg-[var(--bg-card)]
                    p-4
                    focus-within:ring-2
                    focus-within:ring-[var(--color-brand)]
                "
            >
                <EditorToolbar editor={editor} />
                <EditorContent editor={editor} />
            </div>

            {/* Helper text */}
            {helperText && (
                <p className="mt-2 text-xs text-[var(--text-secondary)]">
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default RichTextEditor;
