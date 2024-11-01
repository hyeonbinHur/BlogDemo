import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
// import ToolBar from '../Toolbar';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
function ToolBar({ editor }) {
  if (!editor) return null;

  return (
    <div className='flex items-center justify-center gap-2 p-6 py-3 border-b-2 sm:gap-8'>
      <div className='flex items-center justify-center gap-2'>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          H3
        </button>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          Strikethrough
        </button>
        <button onClick={() => editor.chain().focus().toggleCode().run()}>
          Code
        </button>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          Quote
        </button>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .setImage({ src: 'https://via.placeholder.com/150' })
              .run()
          }
        >
          Add Photo
        </button>
      </div>
    </div>
  );
}

export default function TipTabTest({ content }) {
  const lowlight = createLowlight(common);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Image.configure({ inline: true, allowBase64: true }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
  });
  useEffect(() => {
    if (content) {
      editor?.commands.setContent(content);
    }
  }, [content]);
  return (
    <div>
      <ToolBar editor={editor} />
      <EditorContent
        id='tiptap'
        editor={editor}
        onClick={() => editor?.commands.focus()}
      />
    </div>
  );
}
