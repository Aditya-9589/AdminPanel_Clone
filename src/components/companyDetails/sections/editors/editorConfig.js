// editorConfig.js
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

/**
 * Shared TipTap extensions
 * Used across About Us, Company Policy, Help & Support
 */
export const editorExtensions = [
    StarterKit.configure({
        heading: {
            levels: [1, 2, 3],
        },
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
        },
    }),

    Underline,

    Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
    }),

    TextAlign.configure({
        types: ["heading", "paragraph"],
    }),

    Placeholder.configure({
        placeholder: ({ node }) => {
            if (node.type.name === "heading") {
                return "Enter a heading...";
            }
            return "Start writing here...";
        },
    }),
];

/**
 * Default editor props
 * Keeps styling consistent across app
 */
export const editorProps = {
    attributes: {
        class:
            "prose prose-sm max-w-none focus:outline-none min-h-[160px]",
    },
};
