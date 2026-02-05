// // EditorToolbar.jsx
// import {
//     BoldIcon,
//     ItalicIcon,
//     UnderlineIcon,
// } from "@heroicons/react/24/outline";

// const ToolbarButton = ({ active, onClick, children }) => (
//     <button
//         onClick={onClick}
//         className={`
//             px-2 py-1 rounded-md text-sm
//             border border-[var(--border-color)]
//             hover:bg-[var(--icon-hover-bg)]
//             ${active ? "bg-[var(--color-brand)] text-white" : ""}
//         `}
//     >
//         {children}
//     </button>
// );

// const EditorToolbar = ({ editor }) => {
//     if (!editor) return null;

//     return (
//         <div className="
//                 flex flex-wrap gap-2
//                 border border-[var(--border-color)]
//                 rounded-lg p-2 mb-2
//                 bg-[var(--bg-card)]
//             ">

//             <ToolbarButton
//                 active={editor.isActive("bold")}
//                 onClick={() => editor.chain().focus().toggleBold().run()}
//             >
//                 <BoldIcon className="h-4 w-4" />
//             </ToolbarButton>

//             <ToolbarButton
//                 active={editor.isActive("italic")}
//                 onClick={() => editor.chain().focus().toggleItalic().run()}
//             >
//                 <ItalicIcon className="h-4 w-4" />
//             </ToolbarButton>

//             <ToolbarButton
//                 active={editor.isActive("underline")}
//                 onClick={() => editor.chain().focus().toggleUnderline().run()}
//             >
//                 <UnderlineIcon className="h-4 w-4" />
//             </ToolbarButton>

//             <ToolbarButton
//                 active={editor.isActive("heading", { level: 1 })}
//                 onClick={() =>
//                     editor.chain().focus().toggleHeading({ level: 1 }).run()
//                 }
//             >
//                 H1
//             </ToolbarButton>

//             <ToolbarButton
//                 active={editor.isActive("heading", { level: 2 })}
//                 onClick={() =>
//                     editor.chain().focus().toggleHeading({ level: 2 }).run()
//                 }
//             >
//                 H2
//             </ToolbarButton>

//             <ToolbarButton
//                 active={editor.isActive("bulletList")}
//                 onClick={() =>
//                     editor.chain().focus().toggleBulletList().run()
//                 }
//             >
//                 • List
//             </ToolbarButton>

//             <ToolbarButton
//                 active={editor.isActive("orderedList")}
//                 onClick={() =>
//                     editor.chain().focus().toggleOrderedList().run()
//                 }
//             >
//                 1. List
//             </ToolbarButton>

//         </div>
//     );
// };

// export default EditorToolbar;
